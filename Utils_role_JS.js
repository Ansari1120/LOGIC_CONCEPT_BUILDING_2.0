// Front-end (using Fetch API)
fetch('/api/users')
  .then(response => response.json())
  .then(users => {
    // Update the UI with user data
    const userList = document.getElementById('user-list');
    users.forEach(user => {
      const li = document.createElement('li');
      li.textContent = user.name;
      userList.appendChild(li);
    });
  });

// Back-end (using Node.js and Express.js)
const express = require('express');
const app = express();

const users = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Doe' }
];

app.get('/api/users', (req, res) => {
  res.json(users);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
