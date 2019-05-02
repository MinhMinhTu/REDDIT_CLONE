const validator = require('validator')



module.exports = function (values){
    let errors={}

    if(validator.isEmpty(values.username)){
        errors.username = "username is required"
    }

    if(validator.isEmpty(values.password)){
        errors.password = "password is required"
    }

    if(!validator.isLength(values.username , {min :3 , max :30})){
        errors.username = "username must between 3 and 30"
    }

    if(!validator.isLength(values.password , {min :6 , max :30})){
        errors.password = "username must between 6 and 30"
    }


    return {
       isValid : Object.keys(errors).length === 0 ,
       errors 
    }
}