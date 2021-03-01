const { compare } = require('bcrypt')
const express = require('express')
const router = express.Router()
const signUpTemp = require('../models/signUp_models')


//Submit the data post request
router.post('/signup', (req, respo) => {
    const signUpUser = new signUpTemp({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        user_name: req.body.user_name,
        email: req.body.email,
        password: req.body.password
    })
    signUpUser.save()
    .then(data =>{
        respo.json(data)
    })
    .catch(error => {
        respo.json(error)
    })
})


//Get all data from mongo
router.get('/',(req,res) => {
    const dataGet = signUpTemp.find()
    .then(dataGet => {
        res.json(dataGet);
    })
    .catch(error => {
        res.json(error)
    })
})

router.post('/login',async (req,res) => {
    let map = {};
        await signUpTemp.find()
        .then(dataGet => {
            dataGet.map(datamap => {
               map[datamap.user_name] = datamap.password;
            })
        })
        .catch(error => {
            console.warn(error)
        })

        try{
            if(map[req.body.username] === req.body.password){
                res.send({
                    token: 'test123'
                })
            }else{
                res.send({token})
            }
        } catch {
            res.status(500).send()
        }
})

module.exports = router;