from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
  __tablename__ = 'users'

  id = db.Column(db.Integer, primary_key = True)
  first_name = db.Column(db.String(40), nullable = False)
  last_name = db.Column(db.String(40), nullable = False)
  email = db.Column(db.String(255), nullable = False, unique = True)
  password = db.Column(db.LargeBinary, nullable=False)
  account_balance = db.Column(db.Float, nullable = False)

  def to_dict(self):
    return {
      "id": self.id,
      "first_name": self.first_name,
      "last_name": self.last_name,
      "email": self.email,
      "account_balance": self.account_balance
    }


class Cryptocurrency(db.Model):
  __tablename__ = 'cryptocurrencies'

  id = db.Column(db.Integer, primary_key = True)
  symbol = db.Column(db.String(), nullable = False)
  name = db.Column(db.String(), nullable = False)
  image_url = db.Column(db.String, nullable = True)
  Transactions = db.relationship('Transaction')

  def to_dict(self):
    return {
      "id": self.id,
      "symbol": self.symbol,
      "name": self.name,
      "image_url": self.image_url
    }

class Transaction(db.Model):
  __tablename__ = 'transactions'

  id = db.Column(db.Integer, primary_key = True)
  transaction_type = db.Column(db.String(), nullable = False)
  crypto_amount = db.Column(db.Float, nullable = False)
  usd_amount = db.Column(db.Float, nullable = False)
  price_per_coin = db.Column(db.Float, nullable = False)
  date = db.Column(db.Date, nullable = False)
  user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable = False)
  crypto_currency_id = db.Column(db.Integer, db.ForeignKey("cryptocurrencies.id"), nullable = False)
  coin = db.relationship('Cryptocurrency')

  def to_dict(self):

    return {
      "id": self.id,
      "transaction_type": self.transaction_type,
      "crypto_amount": self.crypto_amount,
      "usd_amount": self.usd_amount,
      "price_per_coin": self.price_per_coin,
      "date": self.date,
      "user_id": self.user_id,
      "crypto_currency_id": self.crypto_currency_id,
      "coin": self.coin.to_dict()
    }
