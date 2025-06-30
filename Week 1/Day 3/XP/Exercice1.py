class Cat:
    def __init__(self, name, age):
        self.name = name
        self.age = age

# Creating 3 Cat objects
One_cat = Cat("som", 4)
Two_Cat = Cat("lulu", 5)
Three_Cat = Cat("iba", 6)

# Function to find the oldest cat
def find_oldest_cat(cat1, cat2, cat3):
    oldest = cat1
    if cat2.age > oldest.age:
        oldest = cat2
    if cat3.age > oldest.age:
        oldest = cat3
    return oldest

# Call the function and print result
oldest_cat = find_oldest_cat(One_cat, Two_Cat, Three_Cat)
print(f"The oldest cat is {oldest_cat.name}, and is {oldest_cat.age} years old.")
