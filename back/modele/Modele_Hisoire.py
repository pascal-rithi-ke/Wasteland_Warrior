from bson import ObjectId

class Histoire:
    def __init__(self, _id: ObjectId, titre:str, description:str):
        self.id = _id
        self.titre = titre
        self.description = description
    
    def __str__(self):
        return f"{self.id} {self.titre} {self.description}"