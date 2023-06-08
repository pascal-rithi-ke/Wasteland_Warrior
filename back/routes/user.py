from flask import Blueprint, request, jsonify
from bson import json_util
from bson.objectid import ObjectId
from service.mongo import get_mongo_collection_user

user_bp = Blueprint('user_bp', __name__)

@user_bp.route("/getAllUser")
def getAllUser():
    mycol = get_mongo_collection_user()
    result = mycol.find()
    
    # Conversion des _id en format ObjectId
    results_with_objectid = []
    for doc in result:
        doc['_id'] = str(doc['_id'])  # Convertir en str pour JSON
        results_with_objectid.append(doc)
        
    response = jsonify({'results': results_with_objectid})
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response

@user_bp.route("/getUserById/<id>")
def getUserById(id):
    mycol = get_mongo_collection_user()
    object_id = ObjectId(id)  # Convertir le paramètre id en ObjectId
    result = mycol.find_one({"_id": object_id})

    if result:
        result['_id'] = str(result['_id'])  # Convertir l'ObjectId en une chaîne de caractères

    response = jsonify({'results': result})
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response