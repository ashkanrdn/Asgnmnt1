const User = require('../models/User');
const Restaurant = require('../models/ConnectionsModel');
exports.getUserCreate = (req, res, next) => {
    res.render('./users/signup', { title: 'Login' });
}

exports.postUserCreate = (req, res, next) => {
    let user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password
    });
    user.save()
        .then(result => {
            res.redirect('/');
        })
        .catch(err => {
            console.log(err);
            next();
        });
}

exports.getUserLogin = (req, res, next) => {
    res.render('./users/login', { title: 'Login' });
}

exports.postUserLogin = (req, res, next) => {

    let email = req.body.email;
    let password = req.body.password;
    User.findOne({ email: email })
        .then(user => {
            if (user) {
                user.comparePassword(password)
                    .then(isMatch => {
                        if (isMatch) {
                            req.session.user = { id: user._id, name: user.firstName };
                            res.redirect('/connections');
                        } else {
                            //Incorrect password
                            console.log('err')
                            res.redirect('/login');
                        }

                    })
            } else {
                //Incorrect email address
                res.redirect('/login');
            }
        })
        .catch(err => {
            console.log(err);
            next();
        });


};


exports.getUserProfile = (req, res, next) => {

    Restaurant.find({ user: req.session.user.id })
        .then(result => {
            if (result) {

                res.render('./users/profile', { data: result, name: 'Fast Food Inc!' });
            } else {
                res.render('./users/profile', { name: 'Fast Food Inc!' })
            }

        })


}

exports.getUserLogout = (req, res, next) => {
    req.session.destroy(err => {
        res.redirect('/');
    });
}