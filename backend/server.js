const express = require("express");
const cors = require("cors");
const { replyAI } = require("./ai");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/chat", (req, res) => {
  const msg = req.body.message;
  const reply = replyAI(msg);
  res.json({ reply });
});

app.listen(3000, () => {
  console.log("Server running...");
});
