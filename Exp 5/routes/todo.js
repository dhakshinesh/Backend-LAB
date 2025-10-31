const express = require('express');
const { verifyToken, authorizeRole } = require('../middleware/auth');
const router = express.Router();

let todos = [];

// Public route
router.get('/', (req, res) => res.json(todos));

// Protected: Add To-Do
router.post('/', verifyToken, (req, res) => {
  const todo = { task: req.body.task, owner: req.user.username };
  todos.push(todo);
  res.status(201).json(todo);
});

// Admin-only: Clear all To-Dos
router.delete('/all', verifyToken, authorizeRole('admin'), (req, res) => {
  todos = [];
  res.json({ message: 'All todos cleared by admin' });
});

module.exports = router;
