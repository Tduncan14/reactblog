const express = require('express');
const User = require('../models/User');
const bcrypt = require('bcrypt');

//update user

 const router = express.Router()


router.put('/:userId', async(req,res) =>{


     
    if(req.body.userId === req.params.userId){
        if(req.body.password){
            const salt =  await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password,salt)
        }
          try{

                const updatedUser = await User.findByIdAndUpdate(req.params.userId,{
                    $set:req.body
                })

                res.status(200).json(updatedUser);
        


          }
          catch(err){
            res.status(401).json({'You can only update your account':req.params.id});


          }

    }

    else{
        res.status(401).json({'You can only update your account':req.params.id});
    }

})


module.exports = router
