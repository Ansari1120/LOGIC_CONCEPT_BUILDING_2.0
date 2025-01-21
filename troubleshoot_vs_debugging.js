// Backend (Node.js/Express)
app.get("/api/user", (req, res) => {
  // Typo in route
  res.json({ message: "User data fetched" });
});

// Fix
app.get("/api/users", (req, res) => {
  res.json({ message: "User data fetched" });
});

//   Troubleshooting: Identifies that the API route mismatch caused the error.
//   Debugging: Fixes the typo in the backend route definition.
