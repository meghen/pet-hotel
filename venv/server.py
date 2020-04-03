import psycopg2 

# connect to db
con = psycopg2.connect(
    host = "Localhost",
    database = "pet_hotel",
    user = "meganhenry",
)
# create a cursor
cur = con.cursor()

# execute query (will need to be sorted into routes)

# cur.execute('INSERT INTO "table" ("column") VALUES (\'values\')')
# cur.execute('DELETE FROM "table" WHERE "id"=number')
# cur.execute('UPDATE "table" SET "column" = \'new_value\' WHERE "id"=number')
cur.execute('SELECT * FROM "pets" JOIN "owners" ON "pets"."owner_id" = "owners"."id";')

# executes SELECT
rows=cur.fetchall()
for r in rows:
    print(r)

# the .then for a POST/PUT/DELETE query
con.commit()

# close the cursor after you're done with it
cur.close()

# close db connection
con.close()