export default function verifEmailMiddleware(req, res, next) {
  let { email, password } = req.body;
  // console.log("verify", email, password);
  if (
    email === undefined ||
    password === undefined ||
    typeof email !== "string" ||
    typeof password !== "string"
  ) {
    return res.status(400).json({ message: "error data invalid" });
  } else {
    if (email !== "admin") {
      if (
        req.body.email.match(
          /^[\w()<>\-,;:"[\]ç%&ñ]+@[a-z]+\.com\.?((net|[a-z])|com|gob)?\.?(com|net)?$/
        ) === null
      ) {
        return res.status(400).json({
          mesagge: "Error email not valid.",
        });
      }
    }
  }
  next();
}
