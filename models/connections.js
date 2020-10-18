const connectionsList = [
    { conId: 'AA11', conName: "NameHandle", conTopic: "Topic", condDetails: "Details", conDate: "date", conHost: "HostName", conImage: "Path" },
    { conId: 'AA12', conName: "NameHandle", conTopic: "Topic", condDetails: "Details", conDate: "date", conHost: "HostName", conImage: "Path" },
    { conId: 'AA13', conName: "NameHandle", conTopic: "Topic", condDetails: "Details", conDate: "date", conHost: "HostName", conImage: "Path" },
    { conId: 'AA14', conName: "NameHandle", conTopic: "Topic", condDetails: "Details", conDate: "date", conHost: "HostName", conImage: "Path" },
]


function getConnections(dataBase) {

    return dataBase;

}

function getConnection(IDofConnection) {

    let connectionTemp = connectionsList.find(item => item.conId === IDofConnection);
    if (connectionTemp == undefined) {
        return 'undefined';
    } else {

        console.log(connectionTemp);
        return connectionTemp;
    }

}


module.exports.getConnections = getConnections;
module.exports.getConnection = getConnection;