const jwt = require("jsonwebtoken");

const verifyToken = (token) => {
  // decoded - user property of user who is signed in
  return jwt.verify(token, "anykey", (err, decoded) => {
    if (err) {
      return false;
    } else {
      return decoded;
    }
  });
};

module.exports = verifyToken;
