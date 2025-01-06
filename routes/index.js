const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send(`
        <h1>Bienvenido a mi página web</h1>
        <p>${req.dataType}</p>
        <a href="/endroute"><button>ENTRAR</button></a>
    `);
});

module.exports = router;