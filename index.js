import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("SUCCESS!");
});

app.get("/echo", (req, res) => {
  res.send("SUCCESS!echo");
});

app.get("/foxtrot/:kilo", (req, res) => {
  var inputdata = req.params.kilo;
  res.send(`SUCCESS! Received ${inputdata} via foxtrot`);
});

app.use(function(req, res, next) {
  res.send("FAILED! Fix your URL.");
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
