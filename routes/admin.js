const express = require('express');
const router= express.Router();

router.use(express.urlencoded({extended:true}));


const admin=[
    "yash",
    "aanchal"
];

router.use('/',(req,res,next)=>{
    res.send(admin);
});

module.exports=router;

