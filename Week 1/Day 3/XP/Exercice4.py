class Zoo:
    def __init__(self, zoo_name):
        self.name = zoo_name          
        self.animals = []            
        self.animal_groups = {}      
    def add_animal(self, new_animal):
        if new_animal not in self.animals:
            self.animals.append(new_animal)

    def get_animals(self):
        print("\nAnimals in the zoo:")
        for animal in self.animals:
            print("-", animal)

    def sell_animal(self, animal_sold):
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)
            print(f"\n{animal_sold} has been sold.")
        else:
            print(f"\n{animal_sold} is not in the zoo.")

    def sort_animals(self):
        self.animals.sort()  
        grouped = {}

        for animal in self.animals:
            first_letter = animal[0].upper()
            if first_letter not in grouped:
                grouped[first_letter] = [animal]
            else:
                grouped[first_letter].append(animal)

        self.animal_groups = grouped

    def get_groups(self):
        print("\nGrouped animals:")
        for letter, group in self.animal_groups.items():
            print(f"{letter}: {group}")






my_zoo = Zoo("Happy Jungle Zoo")


my_zoo.add_animal("Lion")
my_zoo.add_animal("Bear")
my_zoo.add_animal("Zebra")
my_zoo.add_animal("Cat")
my_zoo.add_animal("Cougar")
my_zoo.add_animal("Giraffe")
my_zoo.add_animal("Baboon")

my_zoo.get_animals()
my_zoo.sell_animal("Bear")
my_zoo.sort_animals()
my_zoo.get_groups()
