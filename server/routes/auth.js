const router = require('express').Router()
const validationRegister = require('../validation/Register')

router.post('/register', (req, res) =>{
    const {username, password} = req.body
    const {isValid, errors} = validationRegister(req.body)

    if(!isValid){
        return res.status(423).json(errors)
    }

    return res.send('ok!')
})

module.exports = router