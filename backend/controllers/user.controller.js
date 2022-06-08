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
            //throw new Error('Please add all fields')
        }

        else if (email.length < 3 || password.length < 3|| email.length > 16 ) {
            res.status(400).json({ wiadomosc: 'nieprawidlowa dlugosc znakow'})
        }
        // Check if user exists
        const userExists = await User.findOne({ email })

        if (userExists) {
            res.status(400).json({ wiadomosc: 'user istnieje'})
            //throw new Error('User already exists')
        }

        // Hash password
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(password, salt)
            //my
            // const user = new User ({
            //     email: email,
            //     password: hash
                
            // })
            // await user.save()
            
            //res.status(200).json({ wiadomosc: 'gratuluję! utworzono nowego użytownika'})
//brad
            const user = await User.create({
                //name,
                email,
                password: hash,
            })

            if (user) {
                res.status(201).json({
                _id: user.id,
               // name: user.name,
                email: user.email,
                token: generateToken(user._id),
                })
            } else {
                res.status(400)
                throw new Error('Invalid user data')
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


// const getMe = asyncHandler(async (req, res) => {
//   res.status(200).json(req.user)
// })

// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_USE, {expiresIn: '5m'})
}

module.exports = {
    user_sign_up,
    user_just_find,
    user_login
}
