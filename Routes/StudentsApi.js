const express = require('express');
const router = express.Router();
// const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const students = require('../Models/Student');

router.use(bodyParser.urlencoded({extended:true}));
router.use(bodyParser.json());

router.get('/api/students',function(req,res){
    students.find(function(err,students){
        if(err) return err;
        res.json(students);
    })
});

router.get('/api/students/:id',function(req,res){
    students.findById(req.params.id,function(err,student){
        if(err) return err;
        res.json(student);
    })
});

router.post('/api/students/',function(req,res){
    students.create(req.body,function(err,student){
        if(err) return err;
        res.json(student);
    })
});

router.delete('/api/students/:id',function(req,res){
    students.findByIdAndRemove(req.params.id,function(err,student){
        if(err) return err;
        res.json(student);
    })
});

router.put('/api/students/:id',function(req,res){
    students.findByIdAndUpdate(req.params.id , req.body,function(err,student){
        if(err) return err;
        res.json(student);
    })
});


module.exports = router;