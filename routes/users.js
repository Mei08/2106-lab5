var express = require('express')
var router = express.Router();
var mongoose = require('mongoose');
var Account = require('../models/account');
var passport = require('passport');
function isLoggedIn (req, res, next) {
    if (req.isAuthenticated()) {
        return next;
    }
    else{
        res.redirect('/auth/login');
    }
}
router.get('/', isLoggedIn, function(req, res, next) {
    Account.find(function (err, users) {
        // if we have an error
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            
           var userid = ['1','2','3'];
           var usernames = ['Me', 'You', 'Them'];
           var password = ['***','***','***'];
           var timeInMs = Date.now();
    // show the users.ejs view in the browser
    res.render('users', { title: 'Users',
                         Id: userid,
                         users: usernames,
                         password: password,
                         Time:timeInMs});
        }
        
    });
});





// make public
module.exports = router;

