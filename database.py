from dotenv import load_dotenv
load_dotenv()

from app import app, db
from app.models import User

with app.app_context():
  db.drop_all()
  db.create_all()

  # ian = User(first_name = 'Ian', last_name = 'Bently', email = 'ian@aa.io', account_balance = 0)
  # stedman = User(first_name = 'Stedman', last_name = 'Houston', email = 'sted@aa.io', account_balance = 0)
  # john = User(first_name = 'John', last_name = 'Larson', email = 'john@aa.io', account_balance = 0)
  # mike = User(first_name = 'Mike', last_name = 'Jones', email = 'mike@aa.io', account_balance = 0)



  # db.session.add(ian)
  # db.session.add(stedman)
  # db.session.add(john)
  # db.session.add(mike)

  # db.session.commit()
