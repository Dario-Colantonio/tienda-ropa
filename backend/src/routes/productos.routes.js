const express = require("express");
const router = express.Router();

//para testear
const productos = [
    {id : 1, nombre : "remera", precio : 1200},
    {id : 2, nombre : "pantalon", precio : 2500},
    {id : 3, nombre : "chomba", precio : 1900}
]

router.get("/", (req, res) => {
    res.json(productos);
})

module.exports = router;