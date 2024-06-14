const jwt = require("jsonwebtoken");

const protectedRoute = async (req, res, next) => {
  const token = req.cookies.jwt;
  if (!token) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      return res.status(401).json({ error: "Unauthorize - Invalid Token!" });
    }

    const user = await User.findById(decoded.userId).select("-password");

    if (!user) {
      return res.status(404).json({ error: "User Not Found!" });
    }

    req.user = user;

    next();
  } catch (error) {
    console.log("Error in protectRoute middleware ---> ", e.message);
    res.status(500).json({ error: "Internal Server Error!" });
  }
};

module.exports = protectedRoute;
