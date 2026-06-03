const express = require('express');
const logger = require('./middlewares/logger');
/*const usersRouter = require('./routes/users');*/
const personajes_de_marvel_que_no_salen_en_peliculas_de_marvelRouter = require('./routes/personajes_de_marvel_que_no_salen_en_peliculas_de_marvel');
const app = express();

// middlewares globales
app.use(express.json()); // leer JASON del body
app.use(logger);

// rutas
/*app.use('/usuario', usersRouter);*/
app.use('/usuario', personajes_de_marvel_que_no_salen_en_peliculas_de_marvelRouter);

const PORT = 3002;

app.listen(PORT,
    () => {
        console.log('hola', PORT);
    }
);