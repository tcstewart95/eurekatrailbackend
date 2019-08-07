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

//creates a new player account without joining them to a company.
const createAccount = function (google_auth,  facebook_auth, firstname, lastname, authenticated, callback) {
  client.query("INSERT INTO player (google_oauth, facebook_oauth, firstname, lastname, authenticated) VALUES ('"+google_auth+"', '"+facebook_auth+"', '"+firstname+"', '"+lastname+"', "+authenticated+");", function (err, result, fields) {
    if (err) {
      console.log(err);
    } else {
      client.query("SELECT id FROM player WHERE google_oauth = '"+google_auth+"' AND facebook_oauth = '"+facebook_auth+"';", function (err, result, fields) {
        if (err) {
          console.log(err);
        } 
        return callback(result);
      });
    }
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

// Note that character is a key word
const addRole = function (id, userRole, userName, userGender, callback) {
  client.query("UPDATE the_eureka_trail.character SET role_id = (SELECT id FROM role WHERE title = '"+userRole+"'),  name = '"+userName+"', gender = "+userGender+", max_hp = (SELECT max_hp FROM role WHERE id = (SELECT id FROM role WHERE title = '"+userRole+"')), current_hp = (SELECT max_hp FROM role WHERE id = (SELECT id FROM role WHERE title = '"+userRole+"')), money = (SELECT starting_money FROM role WHERE id = (SELECT id FROM role WHERE title = '"+userRole+"')), wage = (SELECT starting_wage FROM role WHERE id = (SELECT id FROM role WHERE title = '"+userRole+"')) WHERE id = "+id+";", function (err, result, fields) {
    if (err) console.log(err);
    else {
      client.query("INSERT INTO character_has_skill (character_id, skill_id) SELECT the_eureka_trail.character.id, role_has_skill.skill_id FROM role_has_skill INNER JOIN role ON role_has_skill.role_id = role.id INNER JOIN the_eureka_trail.character ON role.id = the_eureka_trail.character.role_id WHERE role_has_skill.role_id = (SELECT id FROM role WHERE title = '"+userRole+"') AND the_eureka_trail.character.id = "+id+";", function(err, result, fields) {
        if (err) {
          console.log(err);
        } else {
          client.query("INSERT INTO character_has_item (character_id, item_id) SELECT the_eureka_trail.character.id, role_has_item.item_id FROM role_has_item INNER JOIN role ON role_has_item.role_id = role.id INNER JOIN the_eureka_trail.character ON role.id = the_eureka_trail.character.role_id WHERE role_has_item.role_id = (SELECT id FROM role WHERE title = '"+userRole+"') AND the_eureka_trail.character.id = "+id+";", function(err, result, fields) {
            if (err) {
              console.log(err);
            } else {
              return callback(result);
            }
          });
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
const createCaravan = function (name, owner_id, private, join_code, player_max, callback) {
  client.query("INSERT INTO caravan (name, location_id, launched, owner_id, private, join_code, player_max, player_count) VALUES ('"+name+"', 0, 0, "+owner_id+", "+private+", '"+join_code+"', "+player_max+", 0);", function (err, result, fields) {
    if (err) {
      console.log(err);
    } else {
      client.query("SELECT id FROM caravan WHERE name = '"+name+"';", function (err, result, fields) {
        if (err) {
          console.log(err);
        } else {
          return callback(result);
        }
      });
    }
  });
}

//adds a playes to a caravan.
const joinCaravan = function (player_id, caravan_id, callback) {
  // Check if caravan is full
  client.query("SELECT player_count, player_max FROM caravan WHERE id = "+caravan_id+";", function (err, result, fields) {
    if (err) console.log(err);
    if (result[0].player_count < result[0].player_max) {
      client.query("UPDATE caravan SET player_count = player_count+1 WHERE id ="+caravan_id);
      client.query("INSERT INTO plays_in (player_id, caravan_id, character_id) VALUES ("+player_id+", "+caravan_id+", 0);", function (err, result, fields) {
        if (err) console.log(err);
        return callback({"caravan_id":caravan_id});
      });
    }
    else {
      return callback(null);
    }
  })
}

const leaveCaravan = function (player_id, caravan_id, callback) {
  client.query("DELETE FROM plays_in WHERE player_id = "+player_id+" AND caravan_id = "+cavan_id+";", function (err, result, fields) {
    if (err) console.log(err);
    return callback(result);
  })
}

//gets ID of caravan
const getCaravanId = function(email, callback) {
  client.query("SELECT caravan_id FROM  plays_in WHERE player_id = (SELECT id FROM player WHERE email = '"+email+"');", function (err, result, fields) {
    if (err) console.log(err);
    return callback(result);
  })
}

//gets all IDs, names, of public caravans
const  getPublicCaravans = function(callback) {
  client.query("SELECT id, name, player_count, player_max FROM caravan WHERE private = 0 AND player_count < player_max", function (err, result, fields) {
    if (err) console.log(err);
    else return callback(result);
  })
}

//checks if player is the owner of the caravan, and if it is launched
const checkCaravanOwner = function(player_id, caravan_id, callback) {
  client.query("SELECT launched FROM caravan WHERE owner_id = "+player_id+" AND id = "+caravan_id+";", function (err, result, fields) {
    if (err) console.log(err);
    else return callback(result);
  })
}

//get all the roles of members of a caravan
const getCaravanMemberRoles = function(caravan_id) {
  client.query("SELECT role_id FROM the_eureka_trail.character INNER JOIN plays_in ON plays_in.character_id = the_eureka_trail.character.id WHERE plays_in.caravan_id = "+caravan_id+";", function (err, result, fields) {
    if(err) console.log(err);
    else return (result);
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
const launchCaravan = function(caravan_id, callback) {
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
 leaveCaravan,
 getCaravanId,
 getPublicCaravans,
 checkCaravanOwner,
 checkCaravanLaunched,
 launchCaravan,
 selectCaravan,
 getCaravanMemberRoles,
 addPlayerSteps,
 getCaravanSteps
}
