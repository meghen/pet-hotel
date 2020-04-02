

--Create database named "pet_hotel"
CREATE TABLE "owners" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (80) NOT NULL
);

CREATE TABLE "pets" (
    "id" SERIAL PRIMARY KEY,
    "owner_id" INTEGER REFERENCES "owners",
    "pet" VARCHAR (50),
    "breed" VARCHAR (50),
    "color" VARCHAR (50),
    "checked_in" BOOLEAN default false
);

--Hard Coded data 

INSERT INTO "owners" ("name") VALUES ('Chris'), ('Ally'), ('Dane');

INSERT INTO "pets" ("owner_id", "pet", "breed", "color", "checked_in") VALUES ('1', 'Charlie', 'Shih-tzu', 'black', 'FALSE')
,('1', 'Thorin', 'Rabbit', 'White', 'FALSE'), ('2', 'Gatsby', 'Cat', 'White', 'TRUE'), ('3', 'Juniper', 'Cat', 'tabby', 'FALSE');