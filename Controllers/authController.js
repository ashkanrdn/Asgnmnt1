exports.isLoggedIn = (req, res, next) => {
    if (!req.session.user) {
        res.redirect("/Login");
    } else {
        next();
    }
}


exports.isLoggedOut = (req, res, next) => {
    if (req.session.user) {
        res.redirect("/");
    } else {
        next();
    }
}