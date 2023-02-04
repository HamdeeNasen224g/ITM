const express = require('express');
const UserController = require("../controllers/userController");
const { log } = require('console');
const router = require('express').Router();

router.get('/',(req,res,next) => {
    res.render('home');
})

router.get('/header',(req,res,next) => {
    res.sendFile('layout/header.ejs');
})

module.exports = router; 
