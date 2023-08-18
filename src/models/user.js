const mongoose=require('mongoose')
const validator=require('validator')


const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate(val){
            if(!validator.isEmail(val)){
                throw new Error('Invalid Email')
            }
        }
    },
    phone:{
        type:Number,
        unique:true,
        required:true
    },
    message:{
        type:String
    },
    date:{
        type:Date,
        default:Date.now()
    }
})

const User=mongoose.model('user',userSchema);

module.exports=User;