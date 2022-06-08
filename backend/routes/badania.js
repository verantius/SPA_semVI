const express = require("express")
const router = express.Router()
 
const {badania_get_all, badania_add_new,
    badania_get_by_id, badania_change,
    badania_remove,} = require('../controllers/badania.controller')
    
const { protect } = require('../middleware/authMiddleware')


//router.get('/',badania_get_all)
//router.post('/',badania_add_new)

////router.get('/:id',badania_get_by_id)

//router.put('/:id',badania_change)
//router.delete('/:id',badania_remove)

router.route('/').get(protect, badania_get_all).post(protect, badania_add_new)
router.route('/:id').delete(protect, badania_remove).put(protect, badania_change)

module.exports = router