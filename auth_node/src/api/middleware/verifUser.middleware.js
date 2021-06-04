export default function verifUserMiddleware(req, res, next) {
  let {
    email,
    password,
    name,
    lastName,
    numCard,
    dateExpirCard,
    segureCode,
    planElect,
  } = req.body;

  let { name: _name, price, quality, resolution } = planElect;
  if (
    email === undefined ||
    password === undefined ||
    name === undefined ||
    lastName === undefined ||
    numCard === undefined ||
    dateExpirCard === undefined ||
    segureCode === undefined ||
    planElect === undefined ||
    _name === undefined ||
    price === undefined ||
    quality === undefined ||
    resolution === undefined ||
    typeof email !== "string" ||
    typeof name !== "string" ||
    typeof lastName !== "string" ||
    typeof numCard !== "string" ||
    typeof dateExpirCard !== "string" ||
    typeof segureCode !== "string" ||
    typeof planElect !== "object" ||
    typeof _name !== "string" ||
    typeof price !== "string" ||
    typeof quality !== "string" ||
    typeof resolution !== "string"
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
