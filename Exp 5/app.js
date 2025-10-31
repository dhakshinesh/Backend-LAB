const express = require('express');
const app = express();

app.use(express.json());
const PORT = process.env.PORT || 3000;

// Routes
const authRoutes = require('./routes/auth');
const todoRoutes = require('./routes/todo');

app.use('/auth', authRoutes);
app.use('/todos', todoRoutes);

module.exports = app;

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});