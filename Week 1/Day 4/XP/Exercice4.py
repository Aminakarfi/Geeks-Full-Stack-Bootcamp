class Person:
    def __init__(self, first_name, age):
        self.first_name = first_name
        self.age = age
        self.last_name = ""  

    def is_18(self):
        return self.age >= 18  



class Family:
    def __init__(self, last_name):
        self.last_name = last_name
        self.members = []  

    def born(self, first_name, age):
        new_member = Person(first_name, age)      
        new_member.last_name = self.last_name     
        self.members.append(new_member)            
    def check_majority(self, first_name):
        
        for person in self.members:
            if person.first_name == first_name:
                if person.is_18():
                    print("You are over 18, your parents Jane and John accept that you will go out with your friends.")
                else:
                    print("Sorry, you are not allowed to go out with your friends.")
                return
        print(f"No member named {first_name} was found.")

    def family_presentation(self):
        print(f"\nFamily Name: {self.last_name}")
        print("Members:")
        for person in self.members:
            print(f"- {person.first_name}, Age: {person.age}")

my_family = Family("Karfi")
my_family.born("Amina", 22)
my_family.born("Safia", 24)
my_family.born("Saad", 20)
my_family.born("Yassine", 16)
my_family.family_presentation()
my_family.check_majority("Amina")
my_family.check_majority("Safia")
my_family.check_majority("Saad")
my_family.check_majority("Yassine")
my_family.check_majority("Zineb")  
