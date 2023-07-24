const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const user_controller = require ("../controllers/userController")
const token = require("../Utils/verify-token")

const jsonParser= bodyParser.json()

router.post("/api/register",jsonParser, user_controller.user_register_api )

router.post("/api/login",jsonParser, user_controller.user_login_api )

router.get("/api/test",jsonParser, token.verifyToken, token.checkToken, user_controller.user_test_api )

router.get("/api/users",jsonParser, token.verifyToken, token.checkToken, user_controller.user_users_api_get )



module.exports = router