var mysql = require('mysql'); // node module

//please update the details accordingly

var readConnectionPool = mysql.createPool({
  host: 'host'
  user: 'zee',
  password: 'password',
  database: 'databse',
  connectionLimit: 2000,
  port: 3307,
  multipleStatements:true
});

exports.writeResults = (query, valuesToEscape, cb) => {
  writeConnectionPool.getConnection(function (err, conn) {
    if (!err) {
      conn.query(query, valuesToEscape, function (error, results, fields) {
        if (error) {
          conn.release();
          return cb(error);
        } else {
          conn.release();
          return cb(null, { results: results, fields: fields });
        }
      });
    } else {
      console.log(err);
      throw (err);
    }
  });
};
