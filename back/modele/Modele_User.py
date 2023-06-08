class User:
    def __init__(self, _id, nom:str, prenom:str, email:str, password:str):
        self.id = _id
        self.nom = nom
        self.prenom = prenom
        self.email = email
        self.password = password
    
    def __str__(self):
        return f"{self.id} {self.nom} {self.prenom} {self.email} {self.password}"