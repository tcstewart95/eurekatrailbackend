const mysql = require('mysql')

const client = mysql.createConnection({
  user: "playerAccount",
  password: "n*M|t9%Ai5yTN9+N",
  host: "localhost",
  database: "the_eureka_trail"
})

//creates a new player account and joins them to a company. Make sure that if they are starting a new company to create that company first. For development's sake, I am manually adding the company to the database and testing under the condition that I know the company exists.
const createAccount = function (fb_id, g_id, username, firstname, lastname, password, hp, company_id, inventory_id, role_id, image, authenticated, callback) {
  console.log("INSERT INTO player (fb_id, g_id, username, firstname, lastname, password, hp, company_id, inventory_id, role_id, image, authenticated) VALUES ("+fb_id+", "+g_id+", '"+username+"', '"+firstname+"', '"+lastname+"', '"+password+"', "+hp+", "+company_id+", "+inventory_id+", "+role_id+", '"+image+"', "+authenticated+");");
  client.query("INSERT INTO player (fb_id, g_id, username, firstname, lastname, password, hp, company_id, inventory_id, role_id, image, authenticated) VALUES ("+fb_id+", "+g_id+", '"+username+"','"+firstname+"', '"+lastname+"', '"+password+"', "+hp+", "+company_id+", "+inventory_id+", "+role_id+", '"+image+"', "+authenticated+");"), function (err, result, fields) {
    if (err) console.log(err);
    //var today = new Date();
    //console.log("INSERT INTO plays_in (player_id, company_id, total_steps, start_date, end_date) VALUES ((SELECT id FROM player WHERE username = '"+username+"'), "+company_id+", 0, '"+today+"', '"+today+"');");
    //client.query("INSERT INTO plays_in (player_id, company_id, total_steps, start_date, end_date) VALUES ((SELECT id FROM player WHERE username = '"+username+"'), "+company_id+", 0, '"+today+"', '"+today+"');"), function (err, result, fields) {
      //if (err) console.log(err);
      //console.log("Account Created");
    return callback(true);
    //};
    //return callback(false);
  };
}

module.exports = {
 createAccount
}
