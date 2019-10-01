const express = require("express");
const SessionController = require("./controllers/SessionController");
const routes = express.Router();

//req.query -> filtros
//req.params -> parametros edicao, delete
//req.body -> corpo

routes.post("/sessions", SessionController.store);

module.exports = routes;
