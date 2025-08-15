const { Router } = require("express");
const { ctrlSesionLogout } = require("../controllers/sesionLogout");
const router = Router()

/**
 * Ruta cuando se realiza un pago exitoso
 */
router.get("/", ctrlSesionLogout);

module.exports = router