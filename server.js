const express = require("express");
const cookie = require("cookie-parser"
const app = express();

app.use(express.json());
app.use(cookie());

app.all('/', (req, res) => {
  res.send("NhDev Online Now");
});

app.all('/dev', (req, res) => {
  const func = req.query.f || req.query.function || req.query.def;
  try {
    const e = eval(func);
  } catch (err) {
    const e = err;
  }
  res.send(e);
};

app.all('/cookie', (req, res) => {
  res.send(req.cookies)
});

app.listen(process.env.PORT);
