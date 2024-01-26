import express from 'express';
import { getUsers, getUser, createUser, deleteUser, editUser } from '../controllers/users.js';

const router = express.Router();

//get users route
router.get('/',  getUsers);
//add user
router.post('/', createUser)
//get a user
router.get('/:id', getUser)
//delete a user
router.delete('/:id', deleteUser)
//update user 
router.patch('/:id', editUser)
export default router;