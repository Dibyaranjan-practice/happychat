const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { Server } = require("socket.io");

const corsOptions = {
  origin: "http://localhost:3000",
  methods: ["GET", "POST"],
};

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors(corsOptions));
const server = require("http").createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("user connected with id", socket.id);
  socket.on("send", (data) => {
    socket.broadcast.emit("send", { message: data.message });
  });
});

server.listen(4000, () => {
  console.log("Server running");
});

module.exports = app;
