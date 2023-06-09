import pymongo
from dotenv import load_dotenv
import os

load_dotenv()

user = os.getenv('MONGO_USER')
password = os.getenv('MONGO_PASSWORD')
host = os.getenv('MONGO_HOST')
db_name = os.getenv('MONGO_DB_NAME')

uri = f"mongodb+srv://{user}:{password}@{host}/?retryWrites=true&w=majority"

db_collection_histoire = os.getenv('MONGO_DB_COLLECTION_HISTOIRE')
db_collection_user = os.getenv('MONGO_DB_COLLECTION_USER')
db_collection_historique_partie = os.getenv('MONGO_DB_COLLECTION_HISTORIQUE_PARTIE')

def get_mongo_collection_histoire():
    client = pymongo.MongoClient(uri)
    mydb = client[str(db_name)]
    mycol = mydb[str(db_collection_histoire)]
    return mycol

def get_mongo_collection_user():
    client = pymongo.MongoClient(uri)
    mydb = client[str(db_name)]
    mycol = mydb[str(db_collection_user)]
    return mycol

def get_mongo_collection_historique_partie():
    client = pymongo.MongoClient(uri)
    mydb = client[str(db_name)]
    mycol = mydb[str(db_collection_historique_partie)]
    return mycol