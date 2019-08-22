const express = require('express');
const router = express.Router();
// const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const teachers = require('../Models/Teacher');

router.use(bodyParser.urlencoded({extended:true}));
router.use(bodyParser.json());

router.get('/api/teachers',function(req,res){
    teachers.find(function(err,teachers){
        if(err) return err;
        res.json(teachers);
    })
});

router.get('/api/teachers/:id',function(req,res){
    teachers.findById(req.params.id,function(err,teacher){
        if(err) return err;
        res.json(teacher);
    })
});

router.post('/api/teachers/',function(req,res){
    teachers.create(req.body,function(err,teacher){
        if(err) return err;
        res.json(teacher);
    })
});

router.delete('/api/teachers/:id',function(req,res){
    teachers.findByIdAndRemove(req.params.id,function(err,teacher){
        if(err) return err;
        res.json(teacher);
    })
});

router.put('/api/teachers/:id',function(req,res){
    teachers.findByIdAndUpdate(req.params.id , req.body,function(err,teacher){
        if(err) return err;
        res.json(teacher);
    })
});

module.exports = router;
