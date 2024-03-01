const express = require('express');
const router= express.Router();

router.use(express.urlencoded({extended:true}));


const name=[
    "manav",
    "hardik",
    "ronit"
]; 

router.use('/',(req,res,next)=>{
    res.send(name);
});


module.exports = router;

