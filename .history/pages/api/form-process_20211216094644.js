export default function handler(req, res) {
  console.log("Form received!");
  console.log(req);
  res.send({ success: true });
}
