const { Router } = require("express");
const dbTestController = require("./controllers/dbTestController")


const routes = Router();

routes.get("/db", dbTestController.index)
routes.post("/db", dbTestController.store)
routes.put("/db", dbTestController.update)
routes.delete("/db",dbTestController.delete)

module.exports = routes;
