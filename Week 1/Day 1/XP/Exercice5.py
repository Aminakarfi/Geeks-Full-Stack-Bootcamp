my_fav_numbers = {5, 10, 22}
print("My favorite numbers:", my_fav_numbers)

my_fav_numbers.add(4)
my_fav_numbers.add(8)
print("After adding two numbers:", my_fav_numbers)


my_fav_numbers.remove(8)
print("After removing the last added number:", my_fav_numbers)


basmas_fav_numbers = {5, 10, 23}
print("Basma's favorite numbers:", basmas_fav_numbers)


our_fav_numbers = my_fav_numbers.union(basmas_fav_numbers)
print("Our favorite numbers:", our_fav_numbers)
