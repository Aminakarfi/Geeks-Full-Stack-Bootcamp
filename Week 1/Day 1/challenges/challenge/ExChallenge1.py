number = int(input("Enter a number: "))
length = int(input("Enter the length: "))

multiples = []


for i in range(1, length + 1):
    multiple = number * i  
    multiples.append(multiple)  


print( multiples)




