const express = require("express")
const router = express.Router()
 
const {badania_get_all, badania_add_new, badania_change,
    badania_remove,} = require('../controllers/badania.controller')
    
const { protect } = require('../middleware/authMiddleware')


router.route('/').get(protect, badania_get_all).post(protect, badania_add_new)
router.route('/:id').delete(protect, badania_remove).put(protect, badania_change)

module.exports = router