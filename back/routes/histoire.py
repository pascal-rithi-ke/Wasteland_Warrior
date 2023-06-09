from flask import Blueprint, jsonify, request
from bson import json_util
from bson.objectid import ObjectId
from service.mongo import get_mongo_collection_histoire

hist_bp = Blueprint('hist_bp', __name__)

@hist_bp.route("/getAllHistoire", methods=['GET'])
def getAllHistoire():
    mycol = get_mongo_collection_histoire()
    resultQuery = mycol.find()
    result = []
    
    for doc in resultQuery:
        doc['_id'] = str(doc['_id'])  # Convertir en str pour JSON
        result.append(doc)
        
    response = jsonify({'results': result})
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response

@hist_bp.route("/getHistoireById/<id>", methods=['GET'])
def getHistoireById(id):
    mycol = get_mongo_collection_histoire()
    object_id = ObjectId(id)  # Convertir le paramètre id en ObjectId
    result = mycol.find_one({"_id": object_id})
    
    if result:
        result['_id'] = str(result['_id'])
    response = jsonify({'results': result})
    
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response

@hist_bp.route("/addHistoire", methods=['POST'])
def addHistoire():
    data = request.json  # Récupérer les données de l'utilisateur à partir de la requête JSON
    mycol = get_mongo_collection_histoire()
    result = mycol.insert_one(data)
    if result:
        data['_id'] = str(result.inserted_id)
    response = jsonify({'results': data})
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response

@hist_bp.route("/updateHistoireById/<id>", methods=['PUT'])
def updateHistoireById(id):
    data = request.json
    mycol = get_mongo_collection_histoire()
    object_id = ObjectId(id)
    result = mycol.update_one({"_id": object_id}, {"$set": data})
    if result.modified_count > 0:
        data['_id'] = id
        response = jsonify({'results': data})
        response.headers.add("Access-Control-Allow-Origin", "*")
        return response
    else:
        return jsonify({'error': 'Failed to update histoire'})

@hist_bp.route("/deleteHistoireById/<id>", methods=['DELETE'])
def deleteHistoireById(id):
    mycol = get_mongo_collection_histoire()
    object_id = ObjectId(id)
    mycol.delete_one({"_id": object_id})
    response = jsonify({'results': 'ok'})
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response