const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Todo = require('./models/todo.js');
const helmet = require('helmet');
const cors = require('cors')

app.use(helmet())
app.use(cors())
app.use(express.json());

mongoose.connect('mongodb://10.0.2.233:27017/?serverSelectionTimeoutMS=2000')
 .then(()=>console.log("connection done"))
 .catch((e)=>console.log(e))



app.get('/get_contact',async (req,res)=>{
    const get_data = await Todo.find();
    res.send(get_data);
})


app.post('/post_contact',async (req,res)=>{
    // const get_data = await Todo.find();
    // console.log(req.body);
    const { contact } = req.body;
    if(contact){
        const data_save = await Todo({
            contact: contact
        });
        await data_save.save();
        res.send(data_save);

    }else{
        console.log("No contact found")
        // res.sendStatus(400);
    }
})



app.get('/',(req,res)=>{
    res.send('Backend is running ..');
})


app.listen(8000,()=>{
    console.log('listening on http://localhost:8000');
})