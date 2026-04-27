const express = require("express");
const cors = require("cors");
const { handleChat } = require("./ai");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/chat", async (req, res) => {
  const userMessage = req.body.message;
  const reply = await handleChat(userMessage);
  res.json({ reply });
});

app.listen(3000, () => {
  console.log("Parl-Office-Assistant running on port 3000");
});
