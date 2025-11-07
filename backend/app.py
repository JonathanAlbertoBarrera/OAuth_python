from flask import Flask, url_for, session, redirect, request, jsonify
from authlib.integrations.flask_client import OAuth
from flask_cors import CORS
import os
from dotenv import load_dotenv

load_dotenv()  # Carga las variables de entorno desde .env

app = Flask(__name__)
CORS(app)  # Habilita CORS para todas las rutas

app.secret_key = os.getenv('SECRET_KEY', 'dev-secret-key')

# Configuración de OAuth
oauth = OAuth(app)
google = oauth.register(
    name='google',
    server_metadata_url='https://accounts.google.com/.well-known/openid-configuration',
    client_id=os.getenv('GOOGLE_CLIENT_ID'),
    client_secret=os.getenv('GOOGLE_CLIENT_SECRET'),
    client_kwargs={
        'scope': 'openid email profile',
        'prompt': 'consent'  # Esto forzará que siempre muestre la pantalla de consentimiento
    }
)

@app.route('/')
def index():
    return 'Hello from Flask!'

@app.route('/login')
def login():
    redirect_uri = url_for('authorize', _external=True)
    return google.authorize_redirect(redirect_uri)

@app.route('/authorize')
def authorize():
    try:
        token = google.authorize_access_token()
        resp = google.get('https://www.googleapis.com/oauth2/v3/userinfo')
        user_info = resp.json()
        session['profile'] = user_info
        # Redirigir al frontend con la información del usuario
        return redirect(f'http://localhost:5173/welcome?name={user_info.get("name")}')
    except Exception as e:
        print(f"Error en /authorize: {str(e)}")
        return jsonify({"error": str(e)}), 500

@app.route('/logout')
def logout():
    session.pop('profile', None)
    return redirect('http://localhost:5173')

if __name__ == '__main__':
    app.run(port=5000)