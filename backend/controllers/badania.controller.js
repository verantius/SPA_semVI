const mongoose = require("mongoose")
const Badania = require('../models/badania.model')
const asyncHandler = require('express-async-handler')

//OPIS: pobierz wszystkie badania - METODA: GET - ROUTE: /badania/
const badania_get_all = asyncHandler(async (req, res, next) => {
   
    try {
        //przykład: localhost:4000/badania/:62951d413aa5210795947909
 
       const badanie = await Badania.find({ user: req.user.id })
       res.status(200).json(badanie)

    } catch (error){
        res.status(400).json({wiadomosc:'wykryto error' + error})
    }
    
})

//OPIS: dodaj jedno badanie - METODA: POST - ROUTE: /badania/
const badania_add_new = asyncHandler(async (req, res, next) => {

    if (!req.body.produkt) 
        res.status(400).json({ wiadomosc: 'pole z produktami jest puste'})
    if (!req.body.zbadano) 
        res.status(400).json({ wiadomosc: 'pole z badane jest puste'})
        
    try {
        const badanie = new Badania ({
            user: req.user.id,
            produkt: req.body.produkt,
            zbadano: req.body.zbadano,
        })
        await badanie.save()
        res.status(200).json(badanie)
        
    } catch (error) {
        res.status(400).json({wiadomosc:'wykryto error' + error})
    }

    })
    
    //OPIS: zmien badania - METODA: PUT - ROUTE: /badania/:id
    const badania_change = asyncHandler(async (req, res, next) => {
        //res.json({wiadomosc: 'zmien badania'})
        const badanie = await Badania.findById(req.params.id)
        //const badanie = await Badania.find({ user: req.user.id })
        
        if (!badanie) {
            res.status(400)
            throw new Error('badanie not found')
        }
        
        // Check for user
        if (!req.user) {
            res.status(401)
            throw new Error('User not found')
        }
        
            Badania.findById(req.params.id)
            .then(badanie => {
                badanie.produkt = req.body.produkt;
                badanie.zbadano = req.body.zbadano;
           
            badanie.save()
                .then(() => res.json('Exercise updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
            })
            .catch(err => res.status(400).json('Error: ' + err));
})

//OPIS: usuń badania - METODA: DELETE - ROUTE: /badania/:id
const badania_remove = asyncHandler(async (req, res, next) => {
    //przyklad localhost:4000/badania/62a5e7f03954a5bf1895ec8a
    const badanie = await Badania.findById(req.params.id)
    //res.status(200).json({ wiadomosc: 'OK>'})

    if (!badanie) 
        res.status(400).json({ wiadomosc: 'nie znaleziono badań'})
    if (!req.user) 
        res.status(401).json({ wiadomosc: 'nie znaleziono uzydkownika'})
        
    // Make sure the logged in user matches the badanie user
    if (badanie.user.toString() !== req.user.id) 
        res.status(401).json({ wiadomosc: 'brak autoryzacji'})
     
    Badania.findByIdAndDelete(req.params.id)
    .then(() => res.json('Exercise deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
    //await badanie.remove()
        
    //res.status(200).json({ id: req.params.id })

    
})

module.exports = {
    badania_get_all,
    badania_add_new,
    //badania_get_by_id,
    badania_change,
    badania_remove,
}