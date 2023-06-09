from flask import Flask
from flask_cors import CORS

from routes.user import user_bp
from routes.histoire import hist_bp
from routes.historique_partie import historique_partie

app = Flask(__name__)
CORS(app)

# Vérification du fonctionnement de l'API
@app.route("/")
def statut():
    if app.debug == True:
        return "<p>API is running</p>"
    else:
        return "<p>API is not running</p>"

# Route pour les utilisateurs
app.register_blueprint(user_bp)

# Route pour les histoires
app.register_blueprint(hist_bp)

app.register_blueprint(historique_partie)

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=80 , debug=True)
    

    