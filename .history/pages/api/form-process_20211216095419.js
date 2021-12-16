export default function handler(req, res) {
  console.log("Form received!");
  if (req.body) console.log(req.body);
  if (req.query) console.log(req.query);

  res.status(200).send({ success: `Hello! ${req.query.name}` });
}
