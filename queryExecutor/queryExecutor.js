let queryExec = require('../connections/connection')

module.exports = {

    readQuery: function (queryString, valuesToEscape) {
        return new Promise((resolve, reject) => {
            queryExec.readResults(queryString, valuesToEscape,(err, data) => {
                if (err) reject(err);
                else resolve(data.results);          
            });
        })
    },

    writeQuery: function (queryString, valuesToEscape) {
        return new Promise((resolve, reject) => {
            queryExec.writeResults(queryString,valuesToEscape,(err, data) => {
                if (err) reject(err);
                else resolve(data);
            });
        })
    }
}
