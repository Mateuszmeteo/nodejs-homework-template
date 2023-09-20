const express = require('express')
const router = express.Router()
const control = require('./../../controller/contacts')
const {auth} = require('./../../middleware/auth')


router.get('/', auth, control.getContacts);

router.get('/:contactId', auth, control.getContactById);

router.post('/', auth, control.addContacts);

router.delete('/:contactId', auth, control.removeContact);

router.put('/:contactId', auth, control.patchContact);

router.patch('/:contactId/favorite', auth, control.changeStatusContact);

module.exports = router