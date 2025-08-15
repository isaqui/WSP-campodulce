const { Router } = require("express");
const { ctrlSesionVerify } = require("../controllers/sesionVerify");
const router = Router()

/**
 * Ruta cuando se realiza un pago exitoso
 */
router.get("/", ctrlSesionVerify);

module.exports = router