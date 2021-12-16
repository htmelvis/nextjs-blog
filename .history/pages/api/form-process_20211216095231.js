export default function handler(req, res) {
  console.log("Form received!");
  if (req.body) console.log(req.body);
  if (req.query) console.log(req.query);

  res.send({ success: true });
}
