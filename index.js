const express = require("express");
const mahalap = require("./maha-lap");
const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("เจริญพร"));
app.get("/namo", (req, res) => {
  const day = req.query.day;
  const story = req.query.story;
  const time = req.query.time;
  const theHolyNumber = mahalap.namo(day, story, time);
  res.json({
    result: theHolyNumber
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
