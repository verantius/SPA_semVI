const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/user.model')

const user_just_find = (req, res, next) => {
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
}; 

const user_sign_up = asyncHandler(async (req, res, next) => {
    
    const { email, password } = req.body
        
    try {

        if (!email || !password) {
            res.status(400).json({ wiadomosc: 'wypelnij wszystkie pola'})
            
        }

        else if (email.length < 3 || password.length < 3|| email.length > 16 ) {
            res.status(400).json({ wiadomosc: 'nieprawidlowa dlugosc znakow'})
        }
        // Check if user exists
        const userExists = await User.findOne({ email })

        if (userExists) {
            res.status(400).json({ wiadomosc: 'user istnieje'})
            
        }

        // Hash password
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(password, salt)
//
            const user = await User.create({
                email,
                password: hash,
            })

            if (user) {
                res.status(201).json({
                _id: user.id,
                email: user.email,
                token: generateToken(user._id),
                })
            } else {
                res.status(400)
                throw new Error('błedne dane!')
            }


    } catch (error) {
        res.status(400).json({ wiadomosc: 'cos poszlo nie tak  '+ error })
    }
})

//USER LOGIN -- ROUTE: /users/login
const user_login = asyncHandler(async (req, res) => {
  
    const { email, password } = req.body

    try {

        const user = await User.findOne({ email })

        if (user && (await bcrypt.compare(password, user.password))) {
            res.json({
            _id: user.id,
            email: user.email,
            token: generateToken(user._id),
            })
        } 
    } catch (error) {
        res.status(400).json({ wiadomosc: 'cos poszlo nie tak  '+ error })
    }
})

// generowanie jwt
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_USE, {expiresIn: '25m'})
}

module.exports = {
    user_sign_up,
    user_just_find,
    user_login
}
