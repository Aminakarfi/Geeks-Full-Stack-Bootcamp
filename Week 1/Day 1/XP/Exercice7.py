basket = ["Banana", "Apples", "Oranges", "Blueberries"]

basket.remove("Banana")
basket.pop(3)
basket.append("Kiwi")
basket.insert(0, "Apples")
print("Apples count:", basket.count("Apples"))
basket.clear()
print("Final basket:", basket)
