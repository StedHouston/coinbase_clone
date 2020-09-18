from flask import Blueprint, jsonify, request
from app.models import db, User, Transaction, Cryptocurrency

coins_routes = Blueprint('coins', __name__)



@coins_routes.route('/<symbol>', methods=['GET'])
def get_coin(symbol):

    #Get symbol information from user


    found_coin = Cryptocurrency.query.filter(Cryptocurrency.symbol == symbol).first()

    return found_coin.to_dict()
