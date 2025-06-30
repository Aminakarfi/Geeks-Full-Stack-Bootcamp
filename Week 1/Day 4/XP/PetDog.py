import random
from Dog import Dog  # make sure Dog.py and PetDog.py are in the same folder

class PetDog(Dog):
    def __init__(self, name, age, weight):
        super().__init__(name, age, weight)
        self.trained = False

    def train(self):
        print(self.bark())
        self.trained = True

    def play(self, *args):
        all_names = [self.name] + [dog.name for dog in args]
        print(f"{', '.join(all_names)} all play together")

    def do_a_trick(self):
        if self.trained:
            tricks = [
                "does a barrel roll",
                "stands on his back legs",
                "shakes your hand",
                "plays dead"
            ]
            trick = random.choice(tricks)
            print(f"{self.name} {trick}")
        else:
            print(f"{self.name} is not trained yet!")

# Test
if __name__ == "__main__":
    dog1 = PetDog("Max", 3, 10)
    dog2 = PetDog("Luna", 2, 7)
    dog3 = PetDog("Rocky", 4, 12)

    dog1.train()
    dog1.play(dog2, dog3)
    dog1.do_a_trick()

    dog2.do_a_trick()
