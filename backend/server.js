const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

let students = [
  { id: 1, name: 'Samar Das', grade: 'A' },
  { id: 2, name: 'Raj Kishor', grade: 'B' },
  // Add more students here...
];

app.use(express.json());

// Get all students
app.get('/api/students', (req, res) => {
  res.json(students);
});

// Add a new student
app.post('/api/students', (req, res) => {
  const newStudent = req.body;
  students.push(newStudent);
  res.status(201).json(newStudent);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
