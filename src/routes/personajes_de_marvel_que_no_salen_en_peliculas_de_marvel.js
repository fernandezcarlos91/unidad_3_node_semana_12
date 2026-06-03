const express = require('express');
const router = express.Router();

let personajes_de_marvel_que_no_salen_en_peliculas_de_marvel = [
    { id: 1, nombre: "Blue Marvel", poder: "Fuerza", edad_relativa: 60},
    { id: 1, nombre: "Squirrel Girl", poder: "Comunicación y control de ardillas", edad_relativa: 25},
    { id: 1, nombre: "Molecule Man", poder: "Control de la materia", edad_relativa: 50},
    { id: 1, nombre: "Darkhawk", poder: "Armadura alienígena", edad_relativa: 20},
];

// GET /usuario - obtener todos los usuarios - GetAll
router.get('/', 
    (req, res) => {
        res.json(personajes_de_marvel_que_no_salen_en_peliculas_de_marvel);
    }
);

// GET /usuario/:id - Obtener por id (selectselect * from users where id = __)
router.get(
    '/:id', (req, res) => {
        const personaje = personajes_de_marvel_que_no_salen_en_peliculas_de_marvel.find(
            u => u.id === parseInt(req.params.id)
        );
        if(!personaje){
            return res.status(404).json(
                {error: 'Usuario no encontrado'}
            );
        }
        res.json(personaje);
    } 
);

module.exports = router;