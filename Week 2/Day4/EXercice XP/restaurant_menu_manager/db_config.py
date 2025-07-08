import psycopg2

def get_connection():
    return psycopg2.connect(
        dbname="restaurant",
        user="postgres",
        password="amina2002",
        host="localhost",
        port="5432"
    )
