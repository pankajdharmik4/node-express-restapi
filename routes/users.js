import express from 'express';
import {v4 as uuidv4} from 'uuid'

//A router receives and sends data on computer networks.
const router = express.Router();

//All routes here is starting with /users already

const users = []

//GET ALL THE USERS
router.get('/',(req,res)=>{
    console.log(users);
    res.send(users);
})

//CREATE A USER
router.post('/',(req,res)=>{
    console.log("POST ROUTES ReACHED");
    const user = req.body

    //uuid (npm uuid to create id that is never same)
    const userId = uuidv4();

    const userWithId = {...user, id:userId}

    users.push(userWithId)

    res.send( `User with the name ${user.firstName} added to the database`)
})


//GET ONE USER
//Anything after / will be in as id
//user/2 => req.params {id:2}
router.get('/:id',(req,res)=>{
    // console.log(req.params)
    const {id} = req.params;

    const foundUser = users.find((user)=>user.id === id);
    res.send(foundUser)
})

export default router;