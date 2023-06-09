import bcrypt

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



@user_bp.route("/DeleteUserById/<id>", methods = ['DELETE'])
def DeleteUserById(id):
    mycol = get_mongo_collection_user()
    object_id = ObjectId(id)  # Convertir le paramètre id en ObjectId
    result = mycol.delete_one({"_id": object_id})

    if result:
        result['_id'] = str(result['_id'])  # Convertir l'ObjectId en une chaîne de caractères

    response = jsonify({'results': result})
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response



@user_bp.route("/InsertUser", methods=['POST'])
def InsertUser():
    user_data = request.json  # Récupérer les données de l'utilisateur à partir de la requête JSON

    # Crypter le mot de passe
    password = user_data.get('password')
    hashed_password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt(10))

    # Mettre à jour les données de l'utilisateur avec le mot de passe crypté
    user_data['password'] = hashed_password.decode('utf-8')

    mycol = get_mongo_collection_user()
    result = mycol.insert_one(user_data)  # Insérer les données de l'utilisateur dans la collection

    if result:
        user_data['_id'] = str(result.inserted_id)  # Convertir l'ObjectId en une chaîne de caractères

    response = jsonify({'results': user_data})
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response


@user_bp.route("/UpdateUserById/<id>", methods=['PUT'])
def UpdateUserById(id):
    data = request.json
    mycol = get_mongo_collection_user()
    object_id = ObjectId(id)
    result = mycol.update_one({"_id": object_id}, {"$set": data})
    if result:
        data['_id'] = id
    response = jsonify({'results': data})
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response


@user_bp.route("/Login", methods=['POST'])
def Login():
    user_data = request.json  # Récupérer les données de l'utilisateur à partir de la requête JSON

    username = user_data.get('username')
    password = user_data.get('password')

    mycol = get_mongo_collection_user()
    user = mycol.find_one({"username": username})  # Rechercher l'utilisateur dans la collection

    if user:
        # Vérifier si le mot de passe correspond au mot de passe crypté dans la base de données
        if bcrypt.checkpw(password.encode('utf-8'), user['password'].encode('utf-8')):
            # Connexion réussie
            user['_id'] = str(user['_id'])  # Convertir l'ObjectId en une chaîne de caractères
            response = jsonify({'results': user})
            response.headers.add("Access-Control-Allow-Origin", "*")
            return response

    # Identifiants invalides ou utilisateur non trouvé
    response = jsonify({'results': None})
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response




