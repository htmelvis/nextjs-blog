export default function handler(req, res) {
  console.log("Form received!");
  if (req.body) console.log(req.body);
  if (req.params) console.log(req.query);

  res.send({ success: true });
}
