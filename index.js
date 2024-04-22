const express = require('express');
const sequelize = require('./configuration1/config');
const app = express();
const cors = require('cors');
const tasks_router= require('./routes/tasks');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.statis('public'));
app.use(cors());



sequelize.sync().then((result)=>{console.log(result)}).catch((err)=>{console.log(err);});


app.use('/tasks', tasks_router);
app.get('/',(req,res)=>{
    res.send('hello world');
});

app.listen(3000, ()=>{
    console.log('The Server is On');
});