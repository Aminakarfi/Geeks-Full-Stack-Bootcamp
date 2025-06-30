
class Dog:
    def __init__(self, name, height):
        self.name = name      
        self.height = height  

    def bark(self):
        print(f"{self.name} goes woof!")

    def jump(self):
        jump_height = self.height * 2
        print(f"{self.name} jumps {jump_height} cm high")


davids_dog = Dog("Rex", 52)
sarahs_dog = Dog("Bold", 60)


print(f"{davids_dog.name} is {davids_dog.height} cm tall.")
davids_dog.bark()
davids_dog.jump()


print(f"\n{sarahs_dog.name} is {sarahs_dog.height} cm tall.")
sarahs_dog.bark()
sarahs_dog.jump()


print("\nWho is taller?")
if davids_dog.height > sarahs_dog.height:
    print(f"{davids_dog.name} is taller.")
elif sarahs_dog.height > davids_dog.height:
    print(f"{sarahs_dog.name} is taller.")
else:
    print("They are the same height.")
