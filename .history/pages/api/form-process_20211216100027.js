export default function handler(req, res) {
  // An object containing the cookies sent by the request. req.cookies
  console.log("Form received via:");
  console.log(req.method);
  if (req.body) console.log(req.body);
  if (req.query) console.log(req.query);

  // res.status(200).json({ success: `Hello! ${req.query.name}` });
  res.status(200).json({ hello: "world" }).redirect("/");
}
//https://nextjs.org/docs/api-routes/api-middlewares
// check the above link for extending api routes with TS

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "1mb",
    },
  },
};
