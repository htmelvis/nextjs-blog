export default function handler(req, res) {
  console.log("Form received!");
  console.log(req.body);
  
  res.send({ success: true });
}
