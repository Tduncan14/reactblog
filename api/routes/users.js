const express = require('express');
const User = require('../models/User');


//update user


router.put('/update/:userid', async (req,res) =>{


    if(req.body.userId === req.params.id){


          try{

          }
          catch(err){


          }

    }

    else{
        res.status(401).json('You can only update your account');
    }

})
