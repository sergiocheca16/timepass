const express = require("express");
const app = express();
const index = require("./routes/index");
const endroute = require("./routes/endroute")
const horaMiddleware = require("./middlewares/horaMiddleware");
const validarHora = require("./middlewares/validarHora");

app.use("/", horaMiddleware, index);

app.use("/endroute", horaMiddleware, validarHora, endroute);

app.listen(3000, () => {
    console.log("El servidor esta escuchando en el puerto 3000")
});