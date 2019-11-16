const sql = require('../config/db') // reference of db.js
const states = {}

states.all = () => {
  return new Promise((resolve, reject) => {
    sql.query(
      // 'SELECT s.name, s.descr, s.photo, SUM(t.id) as toursSum FROM states as s INNER JOIN tours as t ON t.stateId = s.id;',
      'SELECT name, descr, photo FROM states WHERE photo <> "" LIMIT 5',
      (err, res) => {
        if (err) {
          return reject(err)
        }
        return resolve(res)
      }
    )
  })
}

module.exports = states
