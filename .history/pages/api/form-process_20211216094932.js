export default function handler(req, res) {
  console.log("Form received!");
  if (req.body) console.log(req.body);
  if (req.params) console.log(req.params);

  res.send({ success: true });
}
