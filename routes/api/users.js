

const express = require('express');
const { signupUser,
        loginUser,
        logoutUser, 
        currentUser } = require('./../../controller/users');
const { auth } = require('./../../middleware/auth');
const { userValid } = require('./../../middleware/validUser');

const router = express.Router();

router.post('/signup', auth, userValid, signupUser);
router.post('/login', auth, userValid, loginUser);
router.post('/logout', auth, logoutUser);
router.get('/current', auth, currentUser);

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
