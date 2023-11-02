const app = require("./socket");

const userRoutes = require("./routes/User");

app.use("/users", userRoutes);

app.use("/", (req, res, next) => {
  res.send("Hello User");
});
