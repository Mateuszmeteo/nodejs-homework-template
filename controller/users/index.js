const { signupUser } = require('./signup');
const { loginUser } = require('./login');
const { logoutUser } = require('./logout');
const { currentUser } = require('./current');


module.exports = { 
    signupUser,
    logoutUser,
    loginUser,
    currentUser,
}