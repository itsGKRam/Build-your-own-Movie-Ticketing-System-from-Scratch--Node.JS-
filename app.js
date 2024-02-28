const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const allController = require("./controller/allController");


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())
app.use('/', allController);


app.listen(process.env.PORT, () => {
  console.log(
    "Project url: https://" + process.env.PORT + ".sock.hicounselor.com"
  );
});
