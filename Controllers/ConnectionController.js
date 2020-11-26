const Connection = require('../models/ConnectionsModel');

exports.getAllConnections = (req, res, next) => {
    Connection.find().populate('User', 'firstName')

    .then(result => {
            res.render('./connections/connections', { conListHandler: result, title: 'Connections' });
        })
        .catch(err => {
            console.log(err);
            next();
        });
}

exports.getConnectionDetail = (req, res, next) => {
    Connection.findById(req.params.id).populate('User', 'firstName')
        .then(result => {

            res.render('./connections/connection', { eventhandle: result, title: " Details of " + result.conTitle });

        })
        .catch(err => {
            console.log(err);
            next();
        });

}

exports.getConnectionCreate = (req, res) => {
    res.render('./connections/NewConnections', { title: "New Connections" });
}
exports.createConnection = (req, res, next) => {
    let connection = new Connection({
        conTopic: req.body.conTopic,
        conTitle: req.body.conTitle,
        conHost: req.body.conHost,
        conDetails: req.body.conDetails,
        conLocation: req.body.conLocation,
        conDate: req.body.conDate,
        conStart: req.body.conStart,
        conEnd: req.body.conEnd,
        conImgURL: req.body.conImgURL,
        user: req.session.user.id
    });
    connection.save()
        .then(result => {
            res.redirect('/');
        })
        .catch(err => {
            console.log(err);
            next();
        });

}

exports.getConnectionUpdate = (req, res, next) => {
    Connection.findById(req.params.id)
        .then(result => {
            if (result && result.user.equals(req.session.user.id))
            // && result.user.equals(req.session.user.id)
                res.render('./connections/UpdateConnection', { eventhandle: result, title: 'Update Connection!' });
            else
                res.redirect('/Connections');
        })
        .catch(err => {
            console.log(err);
            next();
        });
}



exports.updateConnection = (req, res, next) => {


    let connectionParams = {
        conTopic: req.body.conTopic,
        conTitle: req.body.conTitle,
        conHost: req.body.conHost,
        conDetails: req.body.conDetails,
        conLocation: req.body.conLocation,
        conDate: req.body.conDate,
        conStart: req.body.conStart,
        conEnd: req.body.conEnd,
        conImgURL: req.body.conImgURL,
    };


    Connection.findById(req.params.id)
        .then(result => {
            if (result) {
                Connection.findByIdAndUpdate(req.params.id, { $set: connectionParams })
                    .then(result => {
                        res.redirect('/connection/' + req.params.id)
                    })


            } else
                res.redirect('/connections');
        })
        .catch(err => {
            console.log(err);
            next();
        });

};

exports.deleteConnection = (req, res, next) => {
    Connection.findById(req.params.id)
        .then(result => {
            if (result && result.user.equals(req.session.user.id))
            // && result.user.equals(req.session.user.id)
            {
                Connection.findByIdAndDelete(req.params.id)
                    .then(result => {
                        res.redirect('/connections');
                    })
            }
        })


    .catch(err => {
        console.log(err);
        next();
    });
}






exports.getSavedConnections = (req, res, next) => {

    Connection.find({ user: req.session.user.id })
        .then(result => {
            if (result) {

                res.render('./connections/SavedConnections', { data: result, title: 'Fast Food Inc!' });
            } else {
                res.render('./connections/SavedConnections', { name: 'Fast Food Inc!' })
            }

        })


}

exports.authenticate = (req, res, next) => {
    if (!req.session.user) {
        res.redirect("/users/login");
    } else {
        next();
    }
}