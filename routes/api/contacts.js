const express = require('express')
const control = require('./../../controller/contacts')
const auth = require('./../../middleware/auth')
const router = express.Router()

router.get('/', auth, control.getContacts)

router.get('/:contactId', auth, control.getContactById)

router.post('/', auth, control.addContacts)

router.delete('/:contactId', auth, control.removeContact)

router.put('/:contactId', auth, control.patchContact)

router.patch('/:contactId/favorite', auth, control.changeStatusContact)

module.exports = router