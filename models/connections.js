const connectionsList = [




    { conId: 'AA12', conHost: "Elaine Hess", conTopic: "Lecture", condDetails: "Just becaouse Halloween lo", conTime: "16:30 -18:30", conDate: "10/22/2020", conName: "Art Hype", conLoc: "StudentUnion Room A", conImage: "/public/img/NameHandle1.jpg" },
    { conId: 'AA12', conHost: "Bayley Yang", conTopic: "Lecture", condDetails: "Just because Halloween loo", conTime: "15:30 -18:30", conDate: "10/22/2020", conName: "Art History", conLoc: "StudentUnion Room B", conImage: "/public/img/NameHandle2.jpg" },
    { conId: 'AA13', conHost: "Baran Hollis", conTopic: "Lecture", condDetails: "Just because Halloween loo", conTime: "14:30 -16:30", conDate: "10/22/2020", conName: "Design Market", conLoc: "StudentUnion Room C", conImage: "/public/img/NameHandle3.jpg" },
    { conId: 'AA13', conHost: "Eve Cannon", conTopic: "Workshop", condDetails: "Just because Halloween loo", conTime: "8:30 -10:30", conDate: "10/22/2020", conName: "Intro Art", conLoc: "StudentUnion Room D", conImage: "/public/img/NameHandle4.jpg" },
    { conId: 'AA13', conHost: "Tere llivan", conTopic: "Workshop", condDetails: "Just because Halloween loo", conTime: "9:30 -11:30", conDate: "10/22/2020", conName: "Intro Graphics", conLoc: "StudentUnion Room E", conImage: "/public/img/NameHandle5.jpg" },
    { conId: 'AA14', conHost: "Ellen Bush", conTopic: "Workshop", condDetails: "Just because Halloween loo", conTime: "10:30 -12:30", conDate: "10/22/2020", conName: "Hands on photography", conLoc: "StudentUnion Room F", conImage: "/public/img/NameHandle6.jpg" },
]


function getConnections() {

    return connectionsList;

}

function getConnection(IDofConnection) {

    let connectionTemp = connectionsList.find(item => item.conName === IDofConnection);
    if (connectionTemp == undefined) {
        return 'undefined';
    } else {


        return connectionTemp;
    }

}
module.exports.getConnections = getConnections;
module.exports.getConnection = getConnection;
module.exports.connectionsList = connectionsList;