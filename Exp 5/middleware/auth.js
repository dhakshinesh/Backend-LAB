const jwt = require('jsonwebtoken');
const SECRET_KEY = "mysecretkey";

function verifyToken(req, res, next) {
  const header = req.headers['authorization'];
  if (!header) return res.status(403).json({ error: 'Token missing' });

  const token = header.split(' ')[1];
  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ error: 'Invalid token' });
  }
}

function authorizeRole(role) {
  return (req, res, next) => {
    if (req.user.role !== role)
      return res.status(403).json({ error: 'Access denied' });
    next();
  };
}

module.exports = { verifyToken, authorizeRole };
