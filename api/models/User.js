const mongoose = require('mongoose');
// const crypto = require('crypto');
// const uuidv1 = require('uuidv1');


const UserSchema = new mongoose.Schema({

    username:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    password:{
        type:String,
        required:true
    },
    profilePic:{
        type:String,
        default:""
    }
},{timestamps:true})


// UserSchema.virtual('password')
// .set(function(password){
//     this._password = password
//     this.salt = uuidv1()
//     this.hashed_password = this.encryptPassword(password)
// })
// .get(function(){
//     return this._password
// })

// UserSchema.methods = {

//     authenicate: function(plainText){

//         return this.encryptPassword(plainText) === this.hased_password
//     },

//     encryptPassword:function(password){

//         if(!password) return '';

//         try{

//             return crypto.createHmac('sha1',this.salt)
//             .update(password)
//             .digest('hex')

//         }

//         catch(err){

//             return ''
//         }
//     }
// }





const User = mongoose.model('users',UserSchema)

module.exports = User;


