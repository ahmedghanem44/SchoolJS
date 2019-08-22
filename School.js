const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 5000;
const db = 'mongodb://localhost:27017/school';

const students = require('./Routes/StudentsApi');
const teachers = require('./Routes/TeacherApi');

app.use('/teacher',teachers);
app.use('/student',students);

mongoose.connect(db,err=>{
    if(err){
        console.log('Error!' + err)
    }else{
        console.log('Connected to mongodb')
    }
});

app.get('/',(req,res)=>{
    res.send('Default Route')
});

app.listen(port,() => console.log('Lisenting to port '+port));