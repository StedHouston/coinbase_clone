from flask import Blueprint, jsonify, request
from app.models import db, User
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required
import bcrypt
import re

user_routes = Blueprint('users', __name__)


@user_routes.route('/signup', methods=['POST'])
def signup():
    #gather user submitted data
    email = request.form.get('email')
    first_name = request.form.get('first_name')
    last_name = request.form.get('last_name')
    password = request.form.get('password')
    confirmPassword = request.form.get('confirmPassword')

    #validations
    errors = validations_signup(email, first_name, last_name, password, confirmPassword)
    if len(errors) > 0:
        return {'errors': errors}, 401

    #hash password
    hashed_password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt(14))

    #create user in database
    user_to_add = User(email=email, first_name=first_name, last_name=last_name, password=hashed_password, account_balance=100000)
    db.session.add(user_to_add)
    db.session.commit()

    #get id from inserted user
    user1 = User.query.filter(User.email == email).first()
    temp_user = user1.to_dict()

    #create jwt and send back to frontend
    access_token = create_access_token(identity=temp_user['id'])
    return {'access_token':access_token, 'id': temp_user['id'], 'first_name': temp_user['first_name'], 'account_balance': 100000}, 200

@user_routes.route('/signin', methods=['POST'])
def signin():
    #gather user submitted data
    email = request.json.get('email')
    password = request.json.get('password')

    #Error Handling Validations
    errors = validations_signin(email, password)
    if len(errors) > 0:
        return {'errors': errors}, 400

    #Pass validations, find user, create jwt, return user data
    user = User.query.filter_by(email=email).first()
    temp_user = user.to_dict()
    access_token = create_access_token(identity=temp_user['id'])
    return {
        'access_token':access_token,
        'id': temp_user['id'],
        'first_name': temp_user['first_name'],
        'account_balance': temp_user['account_balance']
        }, 200

@user_routes.route('/add_funds', methods=['POST'])
@jwt_required
def add_funds():
    #gather amount of funds to add from the user
    funds_to_add = float(request.json.get('funds_to_add'))

    #get id from json web token
    current_user_id = get_jwt_identity()

    #retrieve user given id if exists
    temp_user = User.query.filter(User.id == current_user_id).first()
    if temp_user is None:
        return {'error': 'User with given id does not exist'}, 400

    #increase users account balance by the amount of funds to add
    temp_user.account_balance += funds_to_add

    #save and commit the change to the database
    db.session.add(temp_user)
    db.session.commit()

    return {'account_balance': temp_user.account_balance}, 200



@user_routes.route('/', methods=['GET','PATCH'])
@jwt_required
def user_page():
    if request.method == 'GET':
        found_user = User.query.filter(User.id == id).first()
        if found_user:
            return found_user.to_dict()
        else:
            return {'error': "User not found"}, 400
    else:
        #gather user submitted data
        json = request.get_json()
        first_name = json.get('first_name')
        last_name = json.get('last_name')
        location = json.get('location')

        #validate user submitted data
        errors = validations_user_details(last_name, first_name)
        if len(errors) > 0:
            return {'errors': errors}

        #get id from json web token
        current_user_id = get_jwt_identity()

        #if user is found in database then update user details. If not, send error to client
        found_user = User.query.filter(User.id == current_user_id).first()
        if(found_user):
            found_user.first_name = first_name
            found_user.last_name = last_name
            found_user.location = location
            db.session.commit()
            return {'message':'Success'}, 200
        else:
            return {'error': 'User was not found'}, 400



#Validations below
def validations_signup(email, first_name, last_name, password, confirmPassword):
    regex ='[^@]+@[^@]+\.[^@]+'
    errors = []
    #Check Email is Unique
    email_found = User.query.filter(User.email == email).first()
    if(email_found):
        errors.append('Account already exists with this email address')
    if not email:
        errors.append('Email is required')
    if not first_name:
        errors.append('First name is required')
    if not last_name:
        errors.append('Last name is required')
    if not password:
        errors.append('Password is required')
    if not re.search(regex, email):
        errors.append('Email is not valid')
    if password != confirmPassword:
        errors.append('Passwords do not match')
    if len(first_name) > 40:
        errors.append('First name is too long')
    if len(last_name) > 40:
        errors.append('Last name is too long')
    if len(email) > 255:
        errors.append('Email length is too long')
    return errors

def validations_signin(email, password):
    errors = []
    if not email:
        errors.append('Email is required')
    if not password:
        errors.append('Password is required')
    if len(email) > 255:
        errors.append('Email length is too long')
    if len(errors) > 0:
        return errors
    user = User.query.filter_by(email=email).first()
    if not user:
        errors.append('User was not found')
        return errors
    if user:
        password_match = bcrypt.checkpw(password.encode('utf-8'), user.password)
        if not password_match:
            errors.append('Password is incorrect')
    return errors

def validations_user_details(last_name, first_name):
    errors = []
    if not last_name:
        errors.append('First name is required')
    if not first_name:
        errors.append('Last name is required')
    if len(errors) > 0:
        return errors
    if len(last_name) > 40:
        errors.append('Last name length is too long')
    if len(first_name) > 40:
        errors.append('First name length is too long')
    if len(last_name) < 1:
        errors.append('Last name was not provided')
    if len(first_name) < 1:
        errors.append('First name was not provided')
    return errors
