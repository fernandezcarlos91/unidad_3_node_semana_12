// Creamos una constante a la cual le asignamos una función anonima
//req = request ---> peticiones
// res = response ---> respuestas

const logger = (req, res, next) => {

    console.log(`${req.method} ${req.url}`);
    next();

};

module.exports = logger;