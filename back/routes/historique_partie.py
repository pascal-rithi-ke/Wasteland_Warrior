from flask import Blueprint, jsonify, request
from bson import json_util
from bson.objectid import ObjectId
from service.mongo import get_mongo_collection_historique_partie

historique_partie = Blueprint('historique_partie', __name__)


# Initialise les points
@historique_partie.route("/InitializeUserCharacteristics/<id>", methods=['POST'])
def InitializeUserCharacteristics(id):
    initial_points = 3
    
    mycol = get_mongo_collection_historique_partie()
    object_id = ObjectId(id)
    
    # Vérifier si l'utilisateur existe dans la base de données
    user = mycol.find_one({"_id": object_id})
    if user:
        characteristics = {
            "strength": initial_points,
            "intelligence": initial_points,
            "charisma": initial_points,
            "endurance": initial_points,
            "health": initial_points
        }
        
        user['characteristics'] = characteristics
        result = mycol.insert_one({"_id": object_id}, user)
        
        if result.modified_count > 0:
            response = jsonify({'message': 'Caractéristiques initialisées avec succès'})
            response.headers.add("Access-Control-Allow-Origin", "*")
            return response
    
    # Utilisateur non trouvé ou erreur lors de l'initialisation
    response = jsonify({'message': 'Erreur lors de l\'initialisation des caractéristiques'})
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response







# Mise à jour des points

@historique_partie.route("/UpdateCharacteristicsById/<id>", methods=['PUT'])
def UpdateCharacteristicsById(id):
    data = request.json
    mycol = get_mongo_collection_historique_partie()
    object_id = ObjectId(id)
    
    # Vérifier si l'utilisateur existe dans la base de données
    user = mycol.find_one({"_id": object_id})
    if user:
        characteristics = user.get('characteristics', {})
        characteristics.update(data)  # Mettre à jour les caractéristiques existantes avec les nouvelles données
        
        result = mycol.update_one({"_id": object_id}, {"$set": {'characteristics': characteristics}})
        if result:
            data['_id'] = id
            response = jsonify({'results': data})
            response.headers.add("Access-Control-Allow-Origin", "*")
            return response

    # Utilisateur non trouvé ou erreur lors de la mise à jour
    response = jsonify({'results': None})
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response
