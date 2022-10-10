import express from 'express';
import { createUser,deleteUser,getUser,getUsers, updateUser } from '../controllers/users.js';

//A router receives and sends data on computer networks.
const router = express.Router();

//All routes here is starting with /users already

let users = []

//GET ALL THE USERS
router.get('/',getUsers)

//CREATE A USER
router.post('/',createUser)


//GET ONE USER
//Anything after / will be in as id
//user/2 => req.params {id:2}
router.get('/:id',getUser)

//FOR DELETEING USER
router.delete('/:id',deleteUser)

//Update user PATCH is use to partial modify something
//PUT is use to overwrite something
router.patch('/:id',updateUser)

export default router;