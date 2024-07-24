const express = require("express");
const ControllerExercicio = require("../controllers/controller.js");

const router = express.Router();

const controllers = new ControllerExercicio()

router.post("/api/somar", controllers.Somar);
router.post("/api/subtrair", controllers.Subtrair);
router.post("/api/multiplicar", controllers.Multiplicar);
router.post("/api/dividir", controllers.Dividir);

module.exports = router;
