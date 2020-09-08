from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
  __tablename__ = 'users'

  id = db.Column(db.Integer, primary_key = True)
  first_name = db.Column(db.String(40), nullable = False)
  last_name = db.Column(db.String(40), nullable = False)
  email = db.Column(db.String(255), nullable = False, unique = True)
  account_balance = db.Column(db.String(255), nullable = False)

  def to_dict(self):
    return {
      "id": self.id,
      "first_name": self.first_name,
      "last_name": self.last_name,
      "email": self.email,
      "account_balance": self.account_balance
    }
