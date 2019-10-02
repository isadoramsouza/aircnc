const express = require("express");
const multer = require("multer");
const uploadConfig = require("./config/upload");

const SessionController = require("./controllers/SessionController");
const SpotController = require("./controllers/SpotController");
const DashboardController = require("./controllers/DashboardController");
const BookingController = require("./controllers/BookingController");

const routes = express.Router();
const upload = multer(uploadConfig);
//req.query -> filtros
//req.params -> parametros edicao, delete
//req.body -> corpo

routes.post("/sessions", SessionController.store);

routes.post("/spots", upload.single("thumbnail"), SpotController.store);

routes.get("/spots", SpotController.index);

routes.get("/dashboard", DashboardController.index);

routes.post("/spots/:spot_id/bookings", BookingController.store);

module.exports = routes;
