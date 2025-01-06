const validarHora = (req, res, next) => {
    const { currentHour } = req;
    if (currentHour >= 12 && currentHour < 24) {
        next();
    } else {
        res.status(403).send(`
            <h1>Bienvenido</h1>
            <p>${req.dataType}</p>
            <p>Aún no es la hora, pruebe en otro momento</p>
            <a href="/"><button>Página Principal</button></a>
        `);
    };
};

module.exports = validarHora;