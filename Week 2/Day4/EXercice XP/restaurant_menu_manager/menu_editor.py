from menu_item import MenuItem
from menu_manager import MenuManager

def show_user_menu():
    while True:
        print("\n--- MENU EDITOR ---")
        print("View Item (V), Add Item (A), Delete Item (D), Update Item (U), Show Menu (S), Exit (E)")
        choice = input("Choose an option: ").strip().upper()

        if choice == 'A':
            add_item_to_menu()
        elif choice == 'D':
            remove_item_from_menu()
        elif choice == 'U':
            update_item_from_menu()
        elif choice == 'S':
            show_restaurant_menu()
        elif choice == 'V':
            view_item()
        elif choice == 'E':
            print("\nFinal Menu:")
            show_restaurant_menu()
            break
        else:
            print("Invalid option.")

def add_item_to_menu():
    name = input("Enter item name: ")
    price = input("Enter item price: ")
    try:
        item = MenuItem(name, int(price))
        item.save()
    except Exception as e:
        print("Error:", e)

def remove_item_from_menu():
    name = input("Enter item name to delete: ")
    item = MenuItem(name, 0)
    item.delete()

def update_item_from_menu():
    current_name = input("Enter current item name: ")
    new_name = input("Enter new name: ")
    new_price = input("Enter new price: ")
    try:
        item = MenuItem(current_name, 0)
        item.update(new_name, int(new_price))
    except Exception as e:
        print("Error:", e)

def show_restaurant_menu():
    items = MenuManager.all_items()
    if not items:
        print("Menu is empty.")
    else:
        print("\n--- RESTAURANT MENU ---")
        for item in items:
            print(f"{item.name}: ${item.price}")

def view_item():
    name = input("Enter item name to view: ")
    item = MenuManager.get_by_name(name)
    if item:
        print(f"{item.name} - ${item.price}")
    else:
        print("Item not found.")

if __name__ == "__main__":
    show_user_menu()
