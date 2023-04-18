require("dotenv").config();
const userController = require("./controllers/userController");
const Express = require("express");
var bodyParser = require("body-parser");
const app = new Express();
app.use(bodyParser.json());

app.get("/", (req, resp) => {
    resp.send("Home Page");
});

app.get("/register_rto", userController.addRTO);
app.get("/get_rto_users", userController.getRTOUsers)
app.get("/add_rto_users", userController.addRTOUser)

app.listen(process.env.PORT | 3000);
