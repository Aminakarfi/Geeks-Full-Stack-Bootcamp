# Given family data
family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}

total_cost = 0  # Start with zero

# Loop through each member
for name, age in family.items():
    if age < 3:
        price = 0
    elif 3 <= age <= 12:
        price = 10
    else:
        price = 15

    # Show price for this member
    print(f"{name.capitalize()} (age {age}) ticket: ${price}")
    
    total_cost += price  # Add to total

# Print the total
print(f"\n family total: ${total_cost}")
