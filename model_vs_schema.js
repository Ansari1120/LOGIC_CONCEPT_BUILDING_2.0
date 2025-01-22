//   Schema:

//   Defines the blueprint of a document.
//   Example: name, email, age fields with validation rules.
//   Model:

//   Creates an interface to interact with the collection.
//   Example: User is used to query and modify documents.

const mongoose = require("mongoose");

// Define a Schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true }, // Name is required
  email: { type: String, required: true, unique: true }, // Email is unique
  age: { type: Number, min: 0 }, // Age must be a non-negative number
  createdAt: { type: Date, default: Date.now }, // Default field value
});

// Create a Model based on the Schema
const User = mongoose.model("User", userSchema);

// Example Usage
async function createUser() {
  try {
    const newUser = new User({
      name: "John Doe",
      email: "john.doe@example.com",
      age: 25,
    });

    // Save the document to the database
    const savedUser = await newUser.save();
    console.log("User created:", savedUser);
  } catch (error) {
    console.error("Error creating user:", error.message);
  }
}

// Connect to MongoDB and run the function
mongoose
  .connect("mongodb://localhost:27017/exampleDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connected");
    createUser();
  })
  .catch((err) => console.error("Database connection error:", err));
