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
        # Convertir l'ObjectId en une chaîne de caractères
        result['_id'] = str(result['_id'])

    response = jsonify({'results': result})
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response


@user_bp.route("/SearchUser/<email>/<username>", methods=['GET'])
def SearchUser(email, username):
    mycol = get_mongo_collection_user()
    result = mycol.find_one({"email": email, "username": username})

    if result:
        result['_id'] = str(result['_id'])

    response = jsonify({'results': result})
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response


@user_bp.route("/GetStatutUser/<username>", methods=['GET'])
def GetStatutUser(username):
    mycol = get_mongo_collection_user()
    result = mycol.find_one({"username": username})

    if result:
        result['_id'] = str(result['_id'])

    response = jsonify({'results': result})
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response


@user_bp.route("/DeleteUserById/<id>", methods=['DELETE'])
def DeleteUserById(id):
    mycol = get_mongo_collection_user()
    object_id = ObjectId(id)  # Convertir le paramètre id en ObjectId
    result = mycol.delete_one({"_id": object_id})

    if result.deleted_count > 0:
        response = jsonify({'message': 'User deleted successfully'})
    else:
        response = jsonify({'message': 'User not found'})

    response.headers.add("Access-Control-Allow-Origin", "*")
    return response


@user_bp.route("/InsertUser", methods=['POST'])
def InsertUser():
    # Récupérer les données de l'utilisateur à partir de la requête JSON
    user_data = request.get_json()

    mycol = get_mongo_collection_user()

    # Rechercher l'utilisateur dans la collection
    SearchUser = mycol.find_one({"email": user_data.get('email'), "username": user_data.get('username')})
    if SearchUser:
        response = jsonify({'error': 'User already exists', 'message': "Une adresse mail est déjà associé", 'results': 'existed'})
        response.headers.add("Access-Control-Allow-Origin", "*")
        return response
    
    # Inserrer les données de l'utilisateur dans la collection
    password = user_data.get('password') # Récupérer le mot de passe
    if not password:
        response = jsonify({'error': 'Missing password', 'message': 'User not inserted'})
        response.headers.add("Access-Control-Allow-Origin", "*")
        return response
    
    hashed_password = bcrypt.hashpw(
        password.encode('utf-8'), bcrypt.gensalt(10))  # Crypter le mot de passe
    
    # Mettre à jour les données de l'utilisateur avec le mot de passe crypté
    user_data['password'] = hashed_password.decode('utf-8')
        
    # Insérer les données de l'utilisateur dans la collection
    result = mycol.insert_one(user_data)
    if result:
        # Convertir l'ObjectId en une chaîne de caractères
        user_data['_id'] = str(result.inserted_id)
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


@user_bp.route("/Login", methods=['GET','POST'])
def Login():
    # Récupérer les données de l'utilisateur à partir de la requête JSON
    user_data = request.json

    username = user_data.get('username')
    password = user_data.get('password')

    mycol = get_mongo_collection_user()
    # Rechercher l'utilisateur dans la collection
    user = mycol.find_one({"username": username})

    if user:
    # Vérifier le mot de passe
        if bcrypt.checkpw(password.encode('utf-8'), user['password'].encode('utf-8')):
            user['_id'] = str(user['_id'])
            response = jsonify({'results': user})
        else:
            response = jsonify({'results': None})
    else:
        response = jsonify({'results': None})
        
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response