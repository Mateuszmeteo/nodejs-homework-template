

const express = require('express');
const { signupUser,
        loginUser,
        logoutUser, 
        currentUser, 
        updateAvatar,
        updateSubscription,
        verificationUser,
        resendEmail} = require('./../../controller/users');
const { auth } = require('./../../middleware/auth');
const { userValid, validationEmail } = require('./../../middleware/validUser');
const { uploadAvatar } = require('./../../middleware/uploadAvatar')

const router = express.Router();

router.post('/signup', userValid, signupUser);
router.post('/login', userValid, loginUser);
router.post('/logout', auth, logoutUser);
router.get('/current', auth, currentUser);

router.patch('/avatars', auth, uploadAvatar.single('avatar'), updateAvatar)
router.patch('/subscription', auth, updateSubscription)

router.get('/verify/:verificationToken', verificationUser)
router.post('/verify', validationEmail, resendEmail)

module.exports = router;




// pobrac kontrolery
// middleware  
// walidacje  


// expres router 


// trasy 

//routers:
// reg  
// login  
// log upt 
// current  
