import os
from flask import Flask, render_template, request, session
from flask_migrate import Migrate
from flask_cors import CORS
from flask_wtf.csrf import CSRFProtect, generate_csrf
from flask_jwt_extended import JWTManager
from app.models import db


from app.models import db, User
from app.api.user_routes import user_routes
from app.api.transactions import transactions_routes
from app.api.coins import coins_routes

from app.config import Config

app = Flask(__name__, static_url_path='')

app.config.from_object(Config)
app.register_blueprint(user_routes, url_prefix='/api/users')
app.register_blueprint(transactions_routes, url_prefix='/api/transactions')
app.register_blueprint(coins_routes, url_prefix='/api/coins')
db.init_app(app)
jwt = JWTManager(app)
Migrate(app, db)

## Application Security
CORS(app)
@app.after_request
def inject_csrf_token(response):
    response.set_cookie('csrf_token',
        generate_csrf(),
        secure=True if os.environ.get('FLASK_ENV') else False,
        samesite='Strict' if os.environ.get('FLASK_ENV') else None,
        httponly=True)
    return response


@app.route('/', defaults={'path': ''})
@app.route('/<path>')
def react_root(path):
    return app.send_static_file('index.html')
