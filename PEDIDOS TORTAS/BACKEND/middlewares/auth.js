const jwt = require('jasonwebtoken');

const auth = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer', '');
    if (!token) return res.status(401), send('Acceso denegado. No hay token proporcionado');
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    }
    catch (err) {
        res.status(400).send('Token Invalido');
    }
};

module.exports = auth;