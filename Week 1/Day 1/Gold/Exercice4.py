names = ['Samus', 'Cortana', 'V', 'Link', 'Mario', 'Cortana', 'Samus']

# Ask the user to enter their name
user_name = input("Enter your name: ")

if user_name in names:
    index = names.index(user_name)
    print(f"{user_name} found at index {index}.")
else:
    print(f"{user_name} is not in the list.")
