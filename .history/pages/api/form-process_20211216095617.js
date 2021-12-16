export default function handler(req, res) {
  // An object containing the cookies sent by the request. req.cookies
  console.log("Form received via:");
  console.log(req.method);
  if (req.body) console.log(req.body);
  if (req.query) console.log(req.query);

  res.status(200).send({ success: `Hello! ${req.query.name}` });
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '1mb',
    },
  },
}