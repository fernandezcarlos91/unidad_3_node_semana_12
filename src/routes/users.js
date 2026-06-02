const express = require('express');
const router = express.Router();

/*
// GET users  localhost:3000/users
router.get('/', 
    (req, res) => {
        res.json(
            {users: ['Carlos' , 'Fernandez']}
        );
    }
);

// GET user with id  localhost:3000/users:id
router.get('/:id', 
    (req, res) => {
        res.json(
            {id: req.params.id}
        );
    }
);
*/

let users = [
    { id: 1, nombre: "Carlos", edad: 35},
    { id: 2, nombre: "Cesar", edad: 20},
    { id: 3, nombre: "Daniel", edad: 25},

];

// GET /usuario - obtener todos los usuarios - GetAll
router.get('/', 
    (req, res) => {
        res.json(users);
    }
);

// GET /usuario/:id - Obtener por id (selectselect * from users where id = __)
router.get(
    '/:id', (req, res) => {
        const user = users.find(
            u => u.id === parseInt(req.params.id)
        );
        if(!user){
            return res.status(404).json(
                {error: 'Usuario no encontrado'}
            );
        }
        res.json(user);
    } 
);

module.exports = router;