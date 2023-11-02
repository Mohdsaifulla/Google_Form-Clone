const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const FormEntry = require("./schema/mongSchema");
const server = express();
server.use(cors());
server.use(bodyParser.json());

// mongoose....
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/GoogleFormData");
}

server.post("/form-server", async (req, res) => {
  const serverData = req.body;
  const formEntry = new FormEntry(serverData);
  console.log(formEntry);
  try {
    const savedEntry = await formEntry.save();
    console.log("Data saved to MongoDB:", savedEntry);
    res.status(200).json({ message: "Data saved successfully" });
  } catch (error) {
    console.error("Error while saving data:", error);
    res.status(500).json({ error: "Data could not be saved" });
  }
});

server.listen(5000, () => {
  console.log("yes server is listening");
});
