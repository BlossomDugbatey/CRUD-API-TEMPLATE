import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

let users = [
   
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

    res.send(user);
})

//delete a user
router.delete('/:id', (req, res)=> {
    const { id } = req.params;

    users = users.filter((user)=> user.id != id)

    res.send(`user with the is ${id} has been deleted`);
})

//update user 
router.patch('/:id', (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, age} = req.body;

    const user = users.find((user) => user.id === id);
    if(firstName) user.firstName = firstName;
    if(lastName) user.lastName = lastName;
    if(age) user.age = age;

    res.send(`user with the is ${id} has been updated`)
})
export default router;