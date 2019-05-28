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
const createAccount = function (email, firstname, lastname, hp, caravan_id, image, authenticated, callback) {
  client.query("INSERT INTO player (email, firstname, lastname, hp, caravan_id, image, authenticated) VALUES ('"+email+"', '"+firstname+"', '"+lastname+"', "+hp+", "+caravan_id+", '"+image+"', "+authenticated+");", function (err, result, fields) {
    if (err) console.log(err);
    return callback(true);
  });
}

//needs callback
const deleteUser = function (email) {
  client.query("DELETE FROM player WHERE email = '"+email+"'");
}

//needs callback
const login = function (email) {
  client.query("UPDATE player SET authenticated = 1 WHERE email = '"+email+"';");
}


//needs update
const logout = function (email) {
  client.query("UPDATE player SET authenticated = 0 WHERE email = '"+email+"';");
}

//needs testing
const getID = function (email, callback) {
  client.query("SELECT id FROM player WHERE email = '"+email+"';", function (err, result, fields) {
    if (err) console.log(err);
    return callback(result);
  });
}

//needs testing
const addRole = function (id, hp, roleId, callback) {
  client.query("UPDATE player SET hp = "+hp+" WHERE id = "+id+";", function (err, result, fields) {
    if (err) {
      console.log(err);
    } else {
      client.query("Update plays_in SET role_id = "+roleId+" WHERE player_id = "+id+";", function (err, result, fields) {
        if (err) {
          console.log(err);
        } else {
          return callback(result);
        }
      });
    }
  });
}

const checkinventoryexists = function (player_id, callback) {
  client.query("SELECT inventory_id FROM has_inventory WHERE player_id = '"+player_id+"';", function (err, result, fields) {
    if (err) console.log(err);
    return callback(result);
  });
}

//needs testing
const addPlayerInventory = function (player_id, callback) {
  client.query("INSERT into inventory (caravan_id) VALUES ((SELECT caravan_id FROM plays_in WHERE player_id = "+player_id+"));", function (err, result, fields) {
    if (err) {
      console.log(err);
    } else {
      client.query("INSERT into has_inventory (player_id, inventory_id) VALUES ("+player_id+", (SELECT id from inventory WHERE caravan_id = (SELECT caravan_id FROM plays_in WHERE player_id = "+player_id+")))", function (err, result, fields) {
        if (err) {
          console.log(err);
        } else {
          return callback(result);
        }
      });
    }
  });
}

//needs update
const getconversation = function (id) {
  client.query("SELECT text FROM conversations WHERE id = "+id+";");
}

//creates a new caravan.
const createCaravan = function (name, feed_id, inventory_id, location_id, image_path, public, callback) {
  client.query("INSERT INTO caravan (name, feed_id, inventory_id, location_id, image_path, public) VALUES ('"+name+"', '"+feed_id+"', '"+inventory_id+"', "+location_id+", '"+image_path+"', "+public+");", function (err, result, fields) {
    if (err) console.log(err);
    return callback(true);
  });
}

//gets ID of caravan
const getCaravanId = function(email, callback) {
  client.query("SELECT caravan_id FROM  plays_in WHERE player_id = (SELECT id FROM player WHERE email = '"+email+"');", function (err, result, fields) {
    if (err) console.log(err);
    return callback(result);
  })
}

//gets members of caravan in order of enrollment
const selectCaravan = function(caravan_id, callback) {
  client.query("SELECT firstname, lastname FROM player p, plays_in pi WHERE p.id = pi.player_id AND pi.caravan_id = "+caravan_id+";", function (err, result, fields) {
    if (err) console.log(err);
    return callback(result);
  })
}

//Gets role of caravan members in order of enrollment
const getCaravanMemberRoles = function(caravan_id, callback) {
  client.query("SELECT role_id FROM plays_in WHERE caravan_id = "+caravan_id+";", function (err, result, fields) {
    if (err) console.log(err);
    return callback(result);
  })
}

module.exports = {
 checkexists,
 createAccount,
 deleteUser,
 login,
 logout,
 getID,
 addRole,
 checkinventoryexists,
 addPlayerInventory,
 getconversation,
 createCaravan,
 getCaravanId,
 selectCaravan,
 getCaravanMemberRoles
}
