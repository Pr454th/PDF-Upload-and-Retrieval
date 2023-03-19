const express = require("express");
const app = express();
const cors = require("cors");
const routes = require("./routes/index");

app.use(cors());
app.use(express.json());
app.use("/", routes);

app.listen(3000, () => {
  console.log("server listening on 3000...");
});
