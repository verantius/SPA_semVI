const mongoose = require("mongoose")
const Badania = require('../models/badania.model')
const asyncHandler = require('express-async-handler')

//OPIS: pobierz wszystkie badania - METODA: GET - ROUTE: /badania/
const badania_get_all = asyncHandler(async (req, res, next) => {
    //res.json({wiadomosc: 'pobierz wszystkie badania'})
    try {
        // const ma ={ user: req.user.id }
        // const badanie = await Badania.find(ma)
        // console.log("first")
        // console.log(badanie)
        // //const badanie = await Badania.findbyId(req.params.id)
        // res.status(200)({wiadomosc: "znaleziono!" + badanie})

       // const id = req.params.id;

       const goals = await Badania.find({ user: req.user.id })

       res.status(200).json(goals)
       
      

    

    } catch (error){
        res.status(400).json({wiadomosc:'wykryto error' + error})
    }
    
})

//OPIS: dodaj jedno badanie - METODA: POST - ROUTE: /badania/
const badania_add_new = asyncHandler(async (req, res, next) => {
    //res.json({wiadomosc: 'dodaj badanie'})
    
    try {

        const badanie = new Badania ({
            user: req.user.id,
            produkt: req.body.produkt,
            zbadano: req.body.zbadano,
        })
        await badanie.save()
        res.status(200).json(badanie)
        
    } catch (error)
    {
        res.status(400).json({wiadomosc:'wykryto error' + error})
    }
    //res.json({wiadomosc: 'dodaj badanie'})
})

//OPIS: pobierz jedno badanie - METODA: GET - ROUTE: /badania/:id
const badania_get_by_id = asyncHandler(async (req, res, next) => {
    res.json({wiadomosc: 'pobierz jedno badanie'})
    
})

//OPIS: zmien badania - METODA: PUT - ROUTE: /badania/:id
const badania_change = asyncHandler(async (req, res, next) => {
    res.json({wiadomosc: 'zmien badania'})
    
})

//OPIS: usuń badania - METODA: DELETE - ROUTE: /badania/:id
const badania_remove = asyncHandler(async (req, res, next) => {
    res.json({wiadomosc: 'usuń badania'})
    
})

module.exports = {
    badania_get_all,
    badania_add_new,
    badania_get_by_id,
    badania_change,
    badania_remove,
}