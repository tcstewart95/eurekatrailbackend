const mysql = require('mysql')

const client = mysql.createConnection({
  user: "playerAccount",
  password: "n*M|t9%Ai5yTN9+N",
  host: "localhost",
  database: "the_eureka_trail"
})

const checkexists = function (email) {
  client.query("SELECT * FROM player WHERE email = '"+email+"'");
    if (err) console.log(err);
    return callback(true);
}

//creates a new player account and joins them to a company. Make sure that if they are starting a new company to create that company first. For development's sake, I am manually adding the company to the database and testing under the condition that I know the company exists.
const createAccount = function (email, username, firstname, lastname, hp, company_id, inventory_id, role_id, image, authenticated, callback) {
  client.query("INSERT INTO player (fb_id, g_id, username, firstname, lastname, password, hp, company_id, inventory_id, role_id, image, authenticated) VALUES ('"+email+"', '"+username+"','"+firstname+"', '"+lastname+"',"+hp+", "+company_id+", "+inventory_id+", "+role_id+", '"+image+"', "+authenticated+");"), function (err, result, fields) {
    if (err) console.log(err);
    return callback(true);
  };
}

const deleteUser = function (email) {
  client.query("DELETE FROM player WHERE email = '"+email+"'");
}

const login = function (email) {
  client.query("UPDATE player SET authenticated = 1 WHERE email = '"+email+"'");
}

const logout = function (email) {
  client.query("UPDATE player SET authenticated = 0 WHERE email = '"+email+"'");
}

module.exports = {
 checkexists,
 createAccount,
 deleteUser,
 login,
 logout
}
