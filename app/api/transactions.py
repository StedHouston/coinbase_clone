from flask import Blueprint, jsonify, request
from app.models import db, User, Transaction, Cryptocurrency
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required
from datetime import date
import bcrypt
import re

transactions_routes = Blueprint('transactions', __name__)


@transactions_routes.route('/buy', methods=['POST'])
@jwt_required
def crypto_buy():
    usd_cost_per_coin = float(request.json.get('usd_amount'))
    crypto_amount = float(request.json.get('crypto_amount'))
    transaction_type = request.json.get('transaction_type')
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

    today = date.today()
    d1 = today.strftime("%m/%d/%Y")
    new_transaction = Transaction(transaction_type='buy', crypto_amount=crypto_amount, usd_amount=cost, price_per_coin=usd_cost_per_coin, date=d1, user_id=current_user_id, crypto_currency_id=coin.id)
    db.session.add(new_transaction)
    db.session.commit()
    return {"mgs": "success"}
