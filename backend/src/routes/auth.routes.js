const express = require("express");
const router = express.Router();

//ruta de prueba
router.get("/", (req, res) => {
    res.send("auth route andnado");
});

module.exports = router;