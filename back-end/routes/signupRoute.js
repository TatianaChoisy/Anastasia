module.exports = function (app) {

  var signup_controller = require('../controllers/signupController');


  // Sign Up page 
  app.route('/signup')
    .post(signup_controller.signup);




};
