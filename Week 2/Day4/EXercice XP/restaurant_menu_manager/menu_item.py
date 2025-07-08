from db_config import get_connection

class MenuItem:
    def __init__(self, name, price):
        self.name = name
        self.price = price

    def save(self):
        conn = get_connection()
        cur = conn.cursor()
        cur.execute("INSERT INTO menu_items (item_name, item_price) VALUES (%s, %s)", (self.name, self.price))
        conn.commit()
        conn.close()
        print("Item added successfully.")

    def delete(self):
        conn = get_connection()
        cur = conn.cursor()
        cur.execute("DELETE FROM menu_items WHERE item_name = %s", (self.name,))
        conn.commit()
        deleted = cur.rowcount
        conn.close()
        if deleted:
            print("Item deleted successfully.")
        else:
            print("Item not found.")

    def update(self, new_name, new_price):
        conn = get_connection()
        cur = conn.cursor()
        cur.execute("UPDATE menu_items SET item_name = %s, item_price = %s WHERE item_name = %s",
                    (new_name, new_price, self.name))
        conn.commit()
        updated = cur.rowcount
        conn.close()
        if updated:
            print("Item updated successfully.")
        else:
            print("Item not found.")
