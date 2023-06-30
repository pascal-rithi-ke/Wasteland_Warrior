from flask import Blueprint, jsonify, request
from bson import json_util
from bson.objectid import ObjectId
from service.mongo import get_mongo_collection_historique_partie
import json

historique_partie = Blueprint('historique_partie', __name__)

# création d'une partie côté User
@historique_partie.route("/createPartie", methods=['POST'])
def create_partie():
    data = request.get_json()
    mycol = get_mongo_collection_historique_partie()
    converted_id = ObjectId(data['id_user'])
    result = mycol.insert_one({
        "id_user": converted_id,
        "hero": data['hero'],
        "characteristics": {
            "force": data['characteristics']['force'],
            "charisme": data['characteristics']['charisme'],
            "endurance": data['characteristics']['endurance'],
            "sante": data['characteristics']['sante']
        },
        "game_statut": data['game_statut']
    })
    response = jsonify({'_id': str(result.inserted_id), 'results': data})
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response

# récupération de la partie en cours côté User
@historique_partie.route("/getUserPartie/<id_user>", methods=['GET'])
def get_partie(id_user):
    mycol = get_mongo_collection_historique_partie()
    converted_id = ObjectId(id_user)
    result = mycol.find_one({"id_user": converted_id, "game_statut": "en cours"})   
    if result:
        result_formatted = json.loads(json_util.dumps(result))
        response = jsonify({'results': result_formatted})
    else:
        response = jsonify({'results': None})
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response

@historique_partie.route("/updateUserPartie/<id_user>", methods=['PUT'])
def update_partie(id_user):
    data = request.get_json()
    mycol = get_mongo_collection_historique_partie()

    converted_user_id = ObjectId(id_user)
    converted_partie_id = ObjectId(data['id_partie'])

    mycol.update_one(
        {
            "_id": converted_partie_id,
            "id_user": converted_user_id
        },
        {"$set": {"game_statut": data["game_statut"]}}
    )

    response = jsonify({'results': data})
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response