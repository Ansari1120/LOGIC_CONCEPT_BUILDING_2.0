// -- Creating a table
CREATE TABLE users (
    id SERIAL PRIMARY KEY, -- Auto-incrementing ID
    name VARCHAR(50),      -- Name column, up to 50 characters
    age INT                -- Age column, stores integers
);

// -- Inserting a row
INSERT INTO users (name, age) VALUES ('Alice', 25);

// -- Querying data
SELECT * FROM users WHERE age > 20; -- Finds all users older than 20




// Switching to database
use mydb;

// Inserting a document into a collection
db.users.insertOne({ name: "Alice", age: 25 });

// Querying documents
db.users.find({ age: { $gt: 20 } }); // Finds all documents where age > 20
