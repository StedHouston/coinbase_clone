from flask import Blueprint, jsonify, request
from app.models import db, User, Transaction, Cryptocurrency
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required
from datetime import date
import bcrypt
import re

transactions_routes = Blueprint('transactions', __name__)


@transactions_routes.route('/get_all/<symbol>', methods=['GET'])
@jwt_required
def get_all(symbol):

    #get id from json web token
    current_user_id = get_jwt_identity()

    #find the id for the cryptocurrency in the transactions
    coin = Cryptocurrency.query.filter(Cryptocurrency.symbol == symbol).first()


    #get all transactions for given user
    transactions = Transaction.query.filter(Transaction.user_id == current_user_id, Transaction.crypto_currency_id == coin.id).all()
    results = [transaction.to_dict() for transaction in transactions]
    return {result['id']: result for result in results}





@transactions_routes.route('/buy', methods=['POST'])
@jwt_required
def crypto_buy():
    usd_cost_per_coin = float(request.json.get('usd_amount'))
    crypto_amount = float(request.json.get('crypto_amount'))
    symbol = request.json.get('symbol')

    #get id from json web token
    current_user_id = get_jwt_identity()

    #retrieve user given id if exists
    temp_user = User.query.filter(User.id == current_user_id).first()
    if temp_user is None:
        return {'error': 'User with given id does not exist'}, 400

    #retrieve crypto id given symbol
    coin = Cryptocurrency.query.filter(Cryptocurrency.symbol == symbol).first()
    if coin is None:
        return {'error': 'this cryptocurrency is not supported'}, 400

    #calculate cost in usd
    cost = round(crypto_amount * usd_cost_per_coin, 2)

    #check if user has enough funds to purchase
    if temp_user.account_balance < cost:
        return {'error': 'User does not have enough funds for purchase'}

    #deduct money from users account to cover purchase
    temp_user.account_balance -= cost
    print("------------------")
    print(temp_user.account_balance)

    today = date.today()
    d1 = today.strftime("%m/%d/%Y")
    new_transaction = Transaction(transaction_type='Bought', crypto_amount=crypto_amount, usd_amount=cost, price_per_coin=usd_cost_per_coin, date=d1, user_id=current_user_id, crypto_currency_id=coin.id)
    db.session.add(new_transaction)
    db.session.add(temp_user)
    db.session.commit()
    return {"account_balance": temp_user.account_balance}

@transactions_routes.route('/sell', methods=['POST'])
@jwt_required
def crypto_sell():
    usd_cost_per_coin = float(request.json.get('usd_amount'))
    crypto_amount = float(request.json.get('crypto_amount'))
    symbol = request.json.get('symbol')

    #get id from json web token
    current_user_id = get_jwt_identity()

    #retrieve user given id if exists
    temp_user = User.query.filter(User.id == current_user_id).first()
    if temp_user is None:
        return {'error': 'User with given id does not exist'}, 400

    #retrieve crypto id given symbol
    coin = Cryptocurrency.query.filter(Cryptocurrency.symbol == symbol).first()
    if coin is None:
        return {'error': 'this cryptocurrency is not supported'}, 400

    #amount in usd that is being sold
    sold_amount = round(usd_cost_per_coin * crypto_amount, 2)

    #retrieve all transactions that contain the user's id and cryptocurrency id
    transactions = Transaction.query.filter(Transaction.user_id == temp_user.id, Transaction.crypto_currency_id == coin.id).all()
    results = [transaction.to_dict() for transaction in transactions]
    total = 0

    for item in results:
        if item['transaction_type'] == 'Bought':
            total += item['crypto_amount']
        if item['transaction_type'] == 'Sold':
            total -= item['crypto_amount']

    if total >= crypto_amount:
        today = date.today()
        d1 = today.strftime("%m/%d/%Y")
        new_transaction = Transaction(transaction_type='Sold', crypto_amount=crypto_amount, usd_amount=sold_amount, price_per_coin=usd_cost_per_coin, date=d1, user_id=current_user_id, crypto_currency_id=coin.id)
        temp_user.account_balance += sold_amount
        db.session.add(new_transaction)
        db.session.commit()
        return {'msg': 'success'}
    else:
        return {'error': 'Not enough funds'}


@transactions_routes.route('/get_amount/<symbol>', methods=['GET'])
@jwt_required
def get_amount(symbol):


    #get id from json web token
    current_user_id = get_jwt_identity()

    #retrieve user given id if exists
    temp_user = User.query.filter(User.id == current_user_id).first()
    if temp_user is None:
        return {'error': 'User with given id does not exist'}, 400

    #retrieve crypto id given symbol
    coin = Cryptocurrency.query.filter(Cryptocurrency.symbol == symbol).first()
    if coin is None:
        return {'error': 'this cryptocurrency is not supported'}, 400


    #retrieve all transactions that contain the user's id and cryptocurrency id
    transactions = Transaction.query.filter(Transaction.user_id == temp_user.id, Transaction.crypto_currency_id == coin.id).all()
    results = [transaction.to_dict() for transaction in transactions]
    total = 0

    for item in results:
        if item['transaction_type'] == 'Bought':
            total += item['crypto_amount']
        if item['transaction_type'] == 'Sold':
            total -= item['crypto_amount']

    return {'crypto_amount': total}
