class Cat:
    def __init__(self,name,age):
        self.name = name
        self.age = age
    def walk(self):
        return f'{self.name} is just walking around'
class Siamese(Cat):
    pass


class Bengal(Cat):
    pass

class Chartreux(Cat):
    pass


siamese_obj= Siamese("Siamese",15)
chartreux_obj = Chartreux("Chartreux",5)
bengal_obj = Bengal("Bengal",15)

all_cats = [siamese_obj,chartreux_obj,bengal_obj]


class Pets():
    def __init__(self,all_cats):
        self.all_cats = all_cats
    
    def walk(self):
        for cat in self.all_cats:
            print(cat.walk())


sara_pets = Pets(all_cats)
sara_pets.walk()