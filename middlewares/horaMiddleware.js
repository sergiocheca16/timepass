const horaMiddleware = (req, res, next) => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const time = `${hours}:${minutes}`;
    req.currentHour = hours;
    req.dataType = `La hora actual es: ${time}`;
    next();
};

module.exports = horaMiddleware;