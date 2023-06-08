from flask import Blueprint, jsonify
from bson import json_util
from bson.objectid import ObjectId
from service.mongo import get_mongo_collection_histoire

hist_bp = Blueprint('hist_bp', __name__)

@hist_bp.route("/getAllHistoire")
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

@hist_bp.route("/getHistoireById/<id>")
def getHistoireById(id):
    mycol = get_mongo_collection_histoire()
    object_id = ObjectId(id)  # Convertir le paramètre id en ObjectId
    result = mycol.find_one({"_id": object_id})
    
    if result:
        result['_id'] = str(result['_id'])  # Convertir l'ObjectId en une chaîne de caractères
    response = jsonify({'results': result})
    
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response