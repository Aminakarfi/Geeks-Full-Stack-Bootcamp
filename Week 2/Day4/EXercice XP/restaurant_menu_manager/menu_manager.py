from db_config import get_connection
from menu_item import MenuItem

class MenuManager:

    @classmethod
    def get_by_name(cls, name):
        conn = get_connection()
        cur = conn.cursor()
        cur.execute("SELECT item_name, item_price FROM menu_items WHERE item_name = %s", (name,))
        result = cur.fetchone()
        conn.close()
        if result:
            return MenuItem(result[0], result[1])
        else:
            return None

    @classmethod
    def all_items(cls):
        conn = get_connection()
        cur = conn.cursor()
        cur.execute("SELECT item_name, item_price FROM menu_items")
        items = cur.fetchall()
        conn.close()
        return [MenuItem(name, price) for name, price in items]
