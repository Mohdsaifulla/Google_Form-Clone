const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const FormEntry = require("./schema/mongSchema");
const server = express();
const { sendEmail } = require("./emailModule/emalSender");
const dotenv = require("dotenv");
server.use(cors());
server.use(bodyParser.json());

// mongoose....
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    connectTimeoutMS: 30000, 
    socketTimeoutMS: 30000,
  });
}

server.post("/form-server", async (req, res) => {
  const serverData = req.body;
  const formEntry = new FormEntry(serverData);
  console.log(formEntry);
  mongoose.set("maxTimeMS", 50000);
  try {
    const savedEntry = await formEntry.save();
    console.log("Data saved to MongoDB:", savedEntry);
    res.status(200).json({ message: "Data saved successfully" });
  } catch (error) {
    console.error("Error while saving data:", error);
    res.status(500).json({ error: "Data could not be saved" });
  }
  sendEmail();
});
const PORT = process.env.PORT;
server.listen(PORT, () => {
  console.log("yes server is listening");
});
