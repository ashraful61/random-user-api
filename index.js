const express = require("express");
const app = express();
const cors = require("cors");
const port = 5000;
const userRoutes = require("./routes/user.route");
const errorHandler = require("./middleware/errorHandler");
//Application middleware
app.use(cors());
app.use(express.json());

//Application Routes
app.use("/user", userRoutes);

app.get("/", (req, res) => {
  res.send("Random user server is running...");
});

// app.all("*", (req, res) => {
//   res.send("NO route found.");
// });

// app.use(errorHandler);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
