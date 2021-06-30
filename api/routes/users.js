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
                },{new:true})

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


router.delete(':delete/id', async(req,res) =>{


  try{

     const deleteUser = await User.findByIdAndDelete(req.params.id,(err,use)=>{
  
         if(err){
             console.log('cannot find user or already deleted')
         }

         else{
             console.log('user is deleted')
         }

     })

     res.status(200).json(deleteUser);

  }

  catch(err){


    console.log(err)

  }


})


module.exports = router
