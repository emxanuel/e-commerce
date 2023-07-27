import psycopg2

db_name = 'ecommerce'
db_user = 'postgres'
db_host = 'localhost'
db_port = 5432
db_password = 'emma2805'

try:
    connection = psycopg2.connect(
        database=db_name,
        user=db_user,
        host=db_host,
        port=db_port,
        password=db_password
    )
    print('database connected succesfully')
except:
    print('database not connected')