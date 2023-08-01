from db import connection
from pypika import Query, Table

conn = connection.connection
cursor = conn.cursor()
customers = Table('customers')

def select():
    query = Query.from_('customers').select('*')
    cursor.execute(query.get_sql())
    result = cursor.fetchall()
    for data in result:
        return ({
            'id': data[0],
            'name': data[1],
            'address': data[2],
            'mail': data[3],
            'number': data[4]
        })

def selectById(id):
    query = Query.from_('customers').where(customers.customer_id == id).select('*')
    cursor.execute(query.get_sql())
    result = cursor.fetchall()
    for data in result:
        return ({
            'id': data[0],
            'name': data[1],
            'address': data[2],
            'mail': data[3],
            'number': data[4]
        })