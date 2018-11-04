const express = require("express");
const app = express();
const port = 3003;

const user = "Anton";
const time = new Date().toLocaleDateString();

app.use(function(req, res, next) {
  res.locals.ua = req.get("User-Agent");
  next();
});

app.get("/", (req, res) => {
  res.send(`<H1>Hello</H1> ${res.locals.ua}-user, it is ${time}`);
});

app.listen(port, () => console.log(`Server running on port: ${port}`));
