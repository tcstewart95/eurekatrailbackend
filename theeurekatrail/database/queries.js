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

//checks if a caravan name is already in use
const checkCaravanExists = function (join_code, callback) {
  client.query("SELECT id FROM caravan WHERE join_code = '"+join_code+"';", function (err, result, fields) {
    if (err) console.log(err);
    return callback(result);
  });
}

//creates a new caravan.
const createCaravan = function (name, owner_id, private, join_code, callback) {
  client.query("INSERT INTO caravan (name, location_id, image, launched, owner_id, private, join_code) VALUES ('"+name+"', 0, 'graphics/role5.png', 0, "+owner_id+", "+private+", '"+join_code+"');", function (err, result, fields) {
    if (err) console.log(err);
    return callback(true);
  });
}

//adds a player to a caravan.
const joinCaravan = function (player_id, caravan_id) {
  client.query("INSERT INTO plays_in (player_id, caravan_id, role_id, total_steps, start_date, end_date) VALUES ("+player_id+", "+caravan_id+", '', 0, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);", function (err, result, fields) {
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

//checks if player is the owner of the caravan, and if it is launched
const checkCaravanOwner = function(player_id, caravan_id, callback) {
  client.query("SELECT launched FROM caravan WHERE owner_id = "+player_id+" AND id = "+caravan_id+";", function (err, result, fields) {
    if (err) console.log(err);
    return callback(result);
  })
}

//checks to see if the caravan still takes enrollment or has already launched
const checkCaravanLaunched = function(caravan_id, callback) {
  client.query("SELECT launched FROM caravan WHERE id = "+caravan_id+";", function (err, result, fields) {
    if (err) console.log(err);
    return callback(result);
  })
}

//updates caravan, sets launched to 1
const laucnhCaravan = function(caravan_id, callback) {
  client.query("UPDATE caravan SET launched = 1 WHERE id = "+caravan_id+";", function (err, result, fields) {
    if (err) console.log(err);
    return callback(result);
  })
}

//gets members of caravan in order of enrollment
const selectCaravan = function(caravan_id, callback) {
  client.query("SELECT id, firstname, lastname FROM player p, plays_in pi WHERE p.id = pi.player_id AND pi.caravan_id = "+caravan_id+";", function (err, result, fields) {
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

//Adds a new record of steps for a player
const addPlayerSteps = function(steps, callback) {
  client.query("INSERT INTO steps ...............SUM(steps) FROM steps WHERE id = (SELECT step_record_id FROM has_steps WHERE caravan_id = "+caravan_id+") AND time_stamp >= (cast(CURRENT_TIMESTAMP-6 as date));", function (err, result, fields) {
    if (err) console.log(err);
    return callback(result);
  })
}

//Gets total number of steps taken in a caravan as of midnight today
const getCaravanSteps = function(caravan_id, callback) {
  client.query("SELECT SUM(steps) FROM steps WHERE id = (SELECT step_record_id FROM has_steps WHERE caravan_id = "+caravan_id+") AND time_stamp >= (cast(CURRENT_TIMESTAMP-6 as date));", function (err, result, fields) {
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
 checkCaravanExists,
 createCaravan,
 joinCaravan,
 getCaravanId,
 checkCaravanOwner,
 checkCaravanLaunched,
 laucnhCaravan,
 selectCaravan,
 getCaravanMemberRoles,
 addPlayerSteps,
 getCaravanSteps
}
