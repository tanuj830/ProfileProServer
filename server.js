const resume = require("./routes/resume");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
// socketio
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

io.on("connection", (socket) => {
  console.log(`⚡: ${socket.id} user just connected!`);
  socket.on("disconnect", () => {
    console.log("🔥: A user disconnected");
  });
});

dotenv.config();

mongoose.set("strictQuery", true);
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connection successful");
  });

app.use(
  cors({
    origin: ["https://tanujbhatt.in", "https://www.google.com/"],
    origin: "*",
    allowedHeaders: "X-Requested-With, Content-Type, Authorization",
    methods: "GET, POST, PATCH, PUT, POST, DELETE, OPTIONS",
  })
);

app.use(express.json());

// socketio
io.on("connection", (socket) => {
  console.log(`⚡: ${socket.id} user just connected!`);

  //Listens and logs the message to the console
  io.on("message", (data) => {
    console.log(data);
  });

  io.on("disconnect", () => {
    console.log("🔥: A user disconnected");
  });
});

app.use("/resume", resume);

app.listen(process.env.PORT || 5000, () => {
  "Server connected successfully";
});
