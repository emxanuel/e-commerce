from db import connection

conn = connection.connection

cursor = conn.cursor()

def select():
    cursor.execute('select * from customers')
    return cursor.fetchall()

def selectById(id):
    cursor.execute('select * from customers where customer_id = ' + id)
    return cursor.fetchall()