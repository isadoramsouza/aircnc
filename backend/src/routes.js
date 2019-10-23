const express = require("express");
const multer = require("multer");
const uploadConfig = require("./config/upload");

const SessionController = require("./controllers/SessionController");
const SpotController = require("./controllers/SpotController");
const DashboardController = require("./controllers/DashboardController");
const BookingController = require("./controllers/BookingController");
const ApprovalController = require("./controllers/ApprovalController");
const RejectionController = require("./controllers/RejectionController");

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

routes.post("/bookings/:booking_id/approvals", ApprovalController.store);

routes.post("/bookings/:booking_id/rejections", RejectionController.store);

module.exports = routes;
