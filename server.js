const express = require("express");
const cookie = require("cookie-parser");
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cookie());
app.use(cors({
  origin: req.headers["referer"],        // 指定來源，不可用 '*'
  credentials: true                     // 允許攜帶 cookie
}));

app.all('/', (req, res) => {
  res.send("NhDev");
});

app.all('/dev', (req, res) => {
  const func = req.query.f || req.query.function || req.query.def;
  try {
    const e = eval(func);
  } catch (err) {
    const e = err;
  }
  res.send(e);
});

app.all('/cookie', (req, res) => {
  res.send(req.cookies);
});

app.listen(process.env.PORT);
