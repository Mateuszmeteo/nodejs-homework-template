const { signupUser } = require('./signup');
const { loginUser } = require('./login');
const { logoutUser } = require('./logout');
const { currentUser } = require('./current');
const { updateAvatar } = require('./updateAvatar');
const { updateSubscription } = require('./updateTestStatus')
const { verificationUser, resendEmail } = require('./verificationEmail')


module.exports = { 
    signupUser,
    logoutUser,
    loginUser,
    currentUser,
    updateAvatar,
    updateSubscription,
    verificationUser,
    resendEmail
}