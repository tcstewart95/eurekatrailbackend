const mysql = require('mysql')

const client = mysql.createConnection({
  user: "playerAccount",
  password: "n*M|t9%Ai5yTN9+N",
  host: "localhost",
  database: "the_eureka_trail"
})

//Checks to see if a email already exists in our system before creating a new user account
const checkexists = function (email, callback) {
  client.query("SELECT * FROM player WHERE email = '"+email+"';", function (err, result, fields) {
    if (err) console.log(err);
    return callback(result);
  });
}

//creates a new player account and joins them to a company. Make sure that if they are starting a new company to create that company first. For development's sake, I am manually adding the company to the database and testing under the condition that I know the company exists.
const createAccount = function (email, firstname, lastname, hp, company_id, inventory_id, role_id, image, authenticated, callback) {
  client.query("INSERT INTO player (email, firstname, lastname, hp, company_id, inventory_id, role_id, image, authenticated) VALUES ('"+email+"', '"+firstname+"', '"+lastname+"', "+hp+", "+company_id+", "+inventory_id+", "+role_id+", '"+image+"', "+authenticated+";", function (err, result, fields) {
    if (err) console.log(err);
    return callback(true);
  });
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

const getconversation = function (id) {
  client.query("SELECT text FROM conversations WHERE id = "+id+";");
}

module.exports = {
 checkexists,
 createAccount,
 deleteUser,
 login,
 logout,
 getconversation
}
