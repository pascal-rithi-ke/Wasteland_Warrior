from flask import Blueprint, jsonify, request
from bson import json_util
from bson.objectid import ObjectId
from service.mongo import get_mongo_collection_histoire

historique_partie = Blueprint('historique_partie', __name__)
