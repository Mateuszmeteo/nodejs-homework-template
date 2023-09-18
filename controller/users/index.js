const { signupUser } = require('./signup');
const { loginUser } = require('./login');
const { logoutUser } = require('./logout');
const { currentUser } = require('./current');
const { updateAvatar } = require('./updateAvatar');
const { updateSubscription } = require('./updateTestStatus')


module.exports = { 
    signupUser,
    logoutUser,
    loginUser,
    currentUser,
    updateAvatar,
    updateSubscription
}