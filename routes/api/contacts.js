const express = require('express')
const control = require('./../../controller/contacts')
const router = express.Router()

router.get('/', control.getContacts)

router.get('/:contactId', control.getContactById)

router.post('/', control.addContacts)

router.delete('/:contactId', control.removeContact)

router.put('/:contactId', control.patchContact)

router.patch('/:contactId/favorite', control.changeStatusContact)

module.exports = router