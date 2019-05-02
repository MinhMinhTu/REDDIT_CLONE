const mongoose = require('mongoose')

const Schema = mongoose.Schema
const bcrypt = require('bcryptjs')
const userSchema = new Schema({
    username : { 
        type: String,
        require : true,
        unique : true
    },
    password : { 
        type: String,
        require : true
    },
    isAdmin : { 
        type: Boolean,
        default : false
    }
})

userSchema.pre('save', async function(next){
    if(!this.isModified('password')){
        return next()
    }

    this.password = await bcrypt.hash(this.password, 10)
    next()
})

userSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password, this.password)
}

module.exports = mongoose.model('User' ,userSchema)
