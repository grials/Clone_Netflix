export default function authMiddleware(req, res, next) {
  if (!req.headers["x-access-token"]) {
    return res.status(401).json({
      auth: false,
      message: "token not registered",
    });
  }

  next();
}
