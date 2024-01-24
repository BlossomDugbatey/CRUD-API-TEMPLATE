import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

const users = [
   
]

//get users route
router.get('/', (req, res) => {
    res.send(users);
});

//add user
router.post('/', (req, res) => {
    const user = req.body
 
    users.push({...user, id:uuidv4()});
    res.send(`user with name ${user.firstName} added successfully`)
})

//get a user
router.get('/:id', (req, res)=> {
    const { id } = req.params;

    const user = users.find((user)=> user.id === id);

    res.send(user)
})

export default router;