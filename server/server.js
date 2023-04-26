const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");

app.set("port", process.env.PORT || 8080);

app.use(cors());
app.use(express.json());
app.use(bodyParser.json())
const router = require("./routers/UserRouter.js");
app.use("/api", router);


app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 대기 중");
});
