from flask import Blueprint, jsonify, request
from bson import json_util
from bson.objectid import ObjectId
from service.mongo import get_mongo_collection_historique_partie

historique_partie = Blueprint('historique_partie', __name__)

# création d'une partie côté User
@historique_partie.route("/createPartie", methods=['POST'])
def create_partie():
    data = request.get_json()
    mycol = get_mongo_collection_historique_partie()
    converted_id = ObjectId(data['id_user'])
    mycol.insert_one({
        "id_user": converted_id,
        "hero": data['hero'],
        "characteristics": {
            "force": data['characteristics']['force'],
            "charisme": data['characteristics']['charisme'],
            "endurance": data['characteristics']['endurance'],
            "sante": data['characteristics']['sante']
        },
        "statut": data['statut']
    })
    response = jsonify({'results': data})
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response