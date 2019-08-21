INSERT INTO the_eureka_trail.player (google_oauth, facebook_oauth, firstname, lastname, authenticated) VALUES ("asadfasdfasdfasdfasdfasdf", "", "test one", "last one", 1);
INSERT INTO the_eureka_trail.player (google_oauth, facebook_oauth, firstname, lastname, authenticated) VALUES ("asadfasdfasdfasdfasdfasdf", "", "test two", "last two", 1);
INSERT INTO the_eureka_trail.player (google_oauth, facebook_oauth, firstname, lastname, authenticated) VALUES ("asadfasdfasdfasdfasdfasdf", "", "test three", "last three", 1);
INSERT INTO the_eureka_trail.player (google_oauth, facebook_oauth, firstname, lastname, authenticated) VALUES ("asadfasdfasdfasdfasdfasdf", "", "test four", "last four", 1);
INSERT INTO the_eureka_trail.player (google_oauth, facebook_oauth, firstname, lastname, authenticated) VALUES ("asadfasdfasdfasdfasdfasdf", "", "test five", "last five", 1);
INSERT INTO the_eureka_trail.player (google_oauth, facebook_oauth, firstname, lastname, authenticated) VALUES ("asadfasdfasdfasdfasdfasdf", "", "test six", "last six", 1);

INSERT INTO the_eureka_trail.caravan (name, location_id, launched, owner_id, private, join_code, player_max, player_count) VALUES ("rogue", 16, 1, 2, 0, "join", 20, 3);
INSERT INTO the_eureka_trail.caravan (name, location_id, launched, owner_id, private, join_code, player_max, player_count) VALUES ("rogue", 8, 1, 3, 1, "", 20, 3);

INSERT INTO the_eureka_trail.character (role_id, name, gender, max_hp, current_hp, money, wage, total_steps, start_date, end_date) VALUES (1, "billy bob", 1, 5, 5, 100, 10, 0, CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP());
INSERT INTO the_eureka_trail.character (role_id, name, gender, max_hp, current_hp, money, wage, total_steps, start_date, end_date) VALUES (2, "billy", 0, 6, 6, 200, 20, 0, CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP());
INSERT INTO the_eureka_trail.character (role_id, name, gender, max_hp, current_hp, money, wage, total_steps, start_date, end_date) VALUES (3, "bob", 1, 3, 3, 300, 10, 0, CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP());
INSERT INTO the_eureka_trail.character (role_id, name, gender, max_hp, current_hp, money, wage, total_steps, start_date, end_date) VALUES (5, "larry", 0, 10, 10, 200, 10, 0, CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP());
INSERT INTO the_eureka_trail.character (role_id, name, gender, max_hp, current_hp, money, wage, total_steps, start_date, end_date) VALUES (9, "jack", 1, 7, 7, 300, 40, 0, CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP());
INSERT INTO the_eureka_trail.character (role_id, name, gender, max_hp, current_hp, money, wage, total_steps, start_date, end_date) VALUES (5, "tom", 0, 5, 5, 300, 30, 0, CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP());

INSERT INTO the_eureka_trail.plays_in (player_id, caravan_id, character_id) VALUES (1, 1, 1);
INSERT INTO the_eureka_trail.plays_in (player_id, caravan_id, character_id) VALUES (2, 1, 2);
INSERT INTO the_eureka_trail.plays_in (player_id, caravan_id, character_id) VALUES (3, 1, 4);
INSERT INTO the_eureka_trail.plays_in (player_id, caravan_id, character_id) VALUES (4, 2, 6);
INSERT INTO the_eureka_trail.plays_in (player_id, caravan_id, character_id) VALUES (5, 2, 3);
INSERT INTO the_eureka_trail.plays_in (player_id, caravan_id, character_id) VALUES (6, 2, 5);


INSERT INTO the_eureka_trail.role (title, starting_money, starting_wage, max_hp, description) VALUES ("wagonmaster", 1000, 100, 5, "Lead the way");
INSERT INTO the_eureka_trail.role (title, starting_money, starting_wage, max_hp, description) VALUES ("miner", 50, 5, 5, "Dig the way");
INSERT INTO the_eureka_trail.role (title, starting_money, starting_wage, max_hp, description) VALUES ("banker", 2000, 100, 5, "Buy the way");
INSERT INTO the_eureka_trail.role (title, starting_money, starting_wage, max_hp, description) VALUES ("priest", 10, 5, 5, "Change the way");
INSERT INTO the_eureka_trail.role (title, starting_money, starting_wage, max_hp, description) VALUES ("doctor", 500, 50, 5, "Perscribe the way");
INSERT INTO the_eureka_trail.role (title, starting_money, starting_wage, max_hp, description) VALUES ("farmer", 40, 10, 5, "Stay here and farm");
INSERT INTO the_eureka_trail.role (title, starting_money, starting_wage, max_hp, description) VALUES ("carpenter", 200, 40, 5, "Carve the way");
INSERT INTO the_eureka_trail.role (title, starting_money, starting_wage, max_hp, description) VALUES ("hunter", 30, 2, 5, "Why does it matter where you live?");
INSERT INTO the_eureka_trail.role (title, starting_money, starting_wage, max_hp, description) VALUES ("merchant", 750, 50, 5, "Pay the way");

INSERT INTO the_eureka_trail.skills (name, value) VALUES ("hunting", 5);
INSERT INTO the_eureka_trail.skills (name, value) VALUES ("hunting", 4);
INSERT INTO the_eureka_trail.skills (name, value) VALUES ("hunting", 3);
INSERT INTO the_eureka_trail.skills (name, value) VALUES ("hunting", 2);
INSERT INTO the_eureka_trail.skills (name, value) VALUES ("hunting", 1);
INSERT INTO the_eureka_trail.skills (name, value) VALUES ("negotiating", 5);
INSERT INTO the_eureka_trail.skills (name, value) VALUES ("negotiating", 4);
INSERT INTO the_eureka_trail.skills (name, value) VALUES ("negotiating", 3);
INSERT INTO the_eureka_trail.skills (name, value) VALUES ("negotiating", 2);
INSERT INTO the_eureka_trail.skills (name, value) VALUES ("negotiating", 1);
INSERT INTO the_eureka_trail.skills (name, value) VALUES ("planning", 5);
INSERT INTO the_eureka_trail.skills (name, value) VALUES ("planning", 4);
INSERT INTO the_eureka_trail.skills (name, value) VALUES ("planning", 3);
INSERT INTO the_eureka_trail.skills (name, value) VALUES ("planning", 2);
INSERT INTO the_eureka_trail.skills (name, value) VALUES ("planning", 1);

INSERT INTO the_eureka_trail.items (name, price, description) VALUES ("fishing pole", 10, "Increases your chance of catching fish by 100%");
INSERT INTO the_eureka_trail.items (name, price, description) VALUES ("bullet", 20, "Increases your chance of catching fish by 100%");
INSERT INTO the_eureka_trail.items (name, price, description) VALUES ("bandages", 30, "Recover one heart. Two hearts if you're the doctor");
INSERT INTO the_eureka_trail.items (name, price, description) VALUES ("gold coin", 40, "Increases negotiation once by 20%");
INSERT INTO the_eureka_trail.items (name, price, description) VALUES ("boots", 50, "Decrease the negative affects of snow by 50%");
INSERT INTO the_eureka_trail.items (name, price, description) VALUES ("arrow", 10, "One arrow is needed and used every time you hunt with a bow");
INSERT INTO the_eureka_trail.items (name, price, description) VALUES ("bow", 20, "Increase chances of getting 50lbs of food when hunting by 25%");
INSERT INTO the_eureka_trail.items (name, price, description) VALUES ("gun", 30, "Increase chances of getting 50lbs of food when hunting by 75%");
INSERT INTO the_eureka_trail.items (name, price, description) VALUES ("trap", 40, "Gauruntee 5lbs of food when hunting");
INSERT INTO the_eureka_trail.items (name, price, description) VALUES ("salt", 50, "Decreas food usage by 5%");

INSERT INTO the_eureka_trail.steps (steps, time_stamp) VALUES (1000,  CURRENT_TIMESTAMP());
INSERT INTO the_eureka_trail.steps (steps, time_stamp) VALUES (2000,  CURRENT_TIMESTAMP());
INSERT INTO the_eureka_trail.steps (steps, time_stamp) VALUES (3000,  CURRENT_TIMESTAMP());
INSERT INTO the_eureka_trail.steps (steps, time_stamp) VALUES (4000,  CURRENT_TIMESTAMP());
INSERT INTO the_eureka_trail.steps (steps, time_stamp) VALUES (5000,  CURRENT_TIMESTAMP());

INSERT INTO the_eureka_trail.has_steps (character_id, step_record_id) VALUES (1, 1);
INSERT INTO the_eureka_trail.has_steps (character_id, step_record_id) VALUES (2, 2);
INSERT INTO the_eureka_trail.has_steps (character_id, step_record_id) VALUES (3, 3);
INSERT INTO the_eureka_trail.has_steps (character_id, step_record_id) VALUES (1, 4);
INSERT INTO the_eureka_trail.has_steps (character_id, step_record_id) VALUES (1, 5);

INSERT INTO the_eureka_trail.item_has_skill (item_id, skill_id) VALUES (1,1);
INSERT INTO the_eureka_trail.item_has_skill (item_id, skill_id) VALUES (2,1);
INSERT INTO the_eureka_trail.item_has_skill (item_id, skill_id) VALUES (3,2);
INSERT INTO the_eureka_trail.item_has_skill (item_id, skill_id) VALUES (4,2);
INSERT INTO the_eureka_trail.item_has_skill (item_id, skill_id) VALUES (5,3);
INSERT INTO the_eureka_trail.item_has_skill (item_id, skill_id) VALUES (6,3);
INSERT INTO the_eureka_trail.item_has_skill (item_id, skill_id) VALUES (7,4);
INSERT INTO the_eureka_trail.item_has_skill (item_id, skill_id) VALUES (8,4);
INSERT INTO the_eureka_trail.item_has_skill (item_id, skill_id) VALUES (9,5);
INSERT INTO the_eureka_trail.item_has_skill (item_id, skill_id) VALUES (10,5);

INSERT INTO the_eureka_trail.role_has_skill (role_id, skill_id) VALUES (1,1);
INSERT INTO the_eureka_trail.role_has_skill (role_id, skill_id) VALUES (1,5);
INSERT INTO the_eureka_trail.role_has_skill (role_id, skill_id) VALUES (1,8);
INSERT INTO the_eureka_trail.role_has_skill (role_id, skill_id) VALUES (2,5);
INSERT INTO the_eureka_trail.role_has_skill (role_id, skill_id) VALUES (3,3);
INSERT INTO the_eureka_trail.role_has_skill (role_id, skill_id) VALUES (4,8);
INSERT INTO the_eureka_trail.role_has_skill (role_id, skill_id) VALUES (5,8);
INSERT INTO the_eureka_trail.role_has_skill (role_id, skill_id) VALUES (6,5);
INSERT INTO the_eureka_trail.role_has_skill (role_id, skill_id) VALUES (7,6);
INSERT INTO the_eureka_trail.role_has_skill (role_id, skill_id) VALUES (8,7);
INSERT INTO the_eureka_trail.role_has_skill (role_id, skill_id) VALUES (2,1);
INSERT INTO the_eureka_trail.role_has_skill (role_id, skill_id) VALUES (4,3);
INSERT INTO the_eureka_trail.role_has_skill (role_id, skill_id) VALUES (6,6);
INSERT INTO the_eureka_trail.role_has_skill (role_id, skill_id) VALUES (8,4);
INSERT INTO the_eureka_trail.role_has_skill (role_id, skill_id) VALUES (5,3);
INSERT INTO the_eureka_trail.role_has_skill (role_id, skill_id) VALUES (4,2);
INSERT INTO the_eureka_trail.role_has_skill (role_id, skill_id) VALUES (3,7);
INSERT INTO the_eureka_trail.role_has_skill (role_id, skill_id) VALUES (5,4);
INSERT INTO the_eureka_trail.role_has_skill (role_id, skill_id) VALUES (7,1);
INSERT INTO the_eureka_trail.role_has_skill (role_id, skill_id) VALUES (6,7);
INSERT INTO the_eureka_trail.role_has_skill (role_id, skill_id) VALUES (4,4);


INSERT INTO the_eureka_trail.role_has_item (role_id, item_id) VALUES (1,1);
INSERT INTO the_eureka_trail.role_has_item (role_id, item_id) VALUES (1,2);
INSERT INTO the_eureka_trail.role_has_item (role_id, item_id) VALUES (1,3);
INSERT INTO the_eureka_trail.role_has_item (role_id, item_id) VALUES (2,4);
INSERT INTO the_eureka_trail.role_has_item (role_id, item_id) VALUES (2,5);
INSERT INTO the_eureka_trail.role_has_item (role_id, item_id) VALUES (2,6);
INSERT INTO the_eureka_trail.role_has_item (role_id, item_id) VALUES (3,7);
INSERT INTO the_eureka_trail.role_has_item (role_id, item_id) VALUES (3,8);
INSERT INTO the_eureka_trail.role_has_item (role_id, item_id) VALUES (3,9);
INSERT INTO the_eureka_trail.role_has_item (role_id, item_id) VALUES (4,10);
INSERT INTO the_eureka_trail.role_has_item (role_id, item_id) VALUES (4,1);
INSERT INTO the_eureka_trail.role_has_item (role_id, item_id) VALUES (4,2);
INSERT INTO the_eureka_trail.role_has_item (role_id, item_id) VALUES (5,3);
INSERT INTO the_eureka_trail.role_has_item (role_id, item_id) VALUES (5,4);
INSERT INTO the_eureka_trail.role_has_item (role_id, item_id) VALUES (5,5);
INSERT INTO the_eureka_trail.role_has_item (role_id, item_id) VALUES (6,6);
INSERT INTO the_eureka_trail.role_has_item (role_id, item_id) VALUES (6,7);
INSERT INTO the_eureka_trail.role_has_item (role_id, item_id) VALUES (6,8);
INSERT INTO the_eureka_trail.role_has_item (role_id, item_id) VALUES (7,9);
INSERT INTO the_eureka_trail.role_has_item (role_id, item_id) VALUES (7,10);
INSERT INTO the_eureka_trail.role_has_item (role_id, item_id) VALUES (8,1);


INSERT INTO the_eureka_trail.location (name, image) VALUES ("Independence", "y");
INSERT INTO the_eureka_trail.location (name, image) VALUES ("Westport Road", "x");
INSERT INTO the_eureka_trail.location (name, image) VALUES ("Alcove Springe", "y");
INSERT INTO the_eureka_trail.location (name, image) VALUES ("Indepence Road", "x");
INSERT INTO the_eureka_trail.location (name, image) VALUES ("Fort Kearney", "y");
INSERT INTO the_eureka_trail.location (name, image) VALUES ("Council Bluffs Road", "x");
INSERT INTO the_eureka_trail.location (name, image) VALUES ("Chimney Rock", "y");
INSERT INTO the_eureka_trail.location (name, image) VALUES ("Mitchell Pass", "x");
INSERT INTO the_eureka_trail.location (name, image) VALUES ("Fort Laramie", "y");
INSERT INTO the_eureka_trail.location (name, image) VALUES ("Childs Cutoff", "x");
INSERT INTO the_eureka_trail.location (name, image) VALUES ("Independence Rock", "y");
INSERT INTO the_eureka_trail.location (name, image) VALUES ("Seminoe Pass", "x");
INSERT INTO the_eureka_trail.location (name, image) VALUES ("Fort Bridger", "y");
INSERT INTO the_eureka_trail.location (name, image) VALUES ("Bear Lake Road", "x");
INSERT INTO the_eureka_trail.location (name, image) VALUES ("Soda Springs", "y");
INSERT INTO the_eureka_trail.location (name, image) VALUES ("Blackfoor River Road", "x");
INSERT INTO the_eureka_trail.location (name, image) VALUES ("Fort Hall", "y");
INSERT INTO the_eureka_trail.location (name, image) VALUES ("Snake River Path", "x");
INSERT INTO the_eureka_trail.location (name, image) VALUES ("City Of Rocks", "y");
INSERT INTO the_eureka_trail.location (name, image) VALUES ("Bishop Creek Route", "x");
INSERT INTO the_eureka_trail.location (name, image) VALUES ("Humboldt River Settlement", "y");
INSERT INTO the_eureka_trail.location (name, image) VALUES ("Humboldt River Route", "x");
INSERT INTO the_eureka_trail.location (name, image) VALUES ("Forty Mile Desert", "y");
INSERT INTO the_eureka_trail.location (name, image) VALUES ("Truckee Route", "x");
INSERT INTO the_eureka_trail.location (name, image) VALUES ("Reno", "y");
INSERT INTO the_eureka_trail.location (name, image) VALUES ("Sierra Nevada Route", "x");
INSERT INTO the_eureka_trail.location (name, image) VALUES ("Eureka", "y");

INSERT INTO the_eureka_trail.destination (id, vendor, about, notes, wage_factor, price_factor) VALUES (1, 1, "Goodbye home", "This is your hometown", 100, 100);
INSERT INTO the_eureka_trail.destination (id, vendor, about, notes, wage_factor, price_factor) VALUES (3, 1, "AS", "Alcove Spring", 90, 100);
INSERT INTO the_eureka_trail.destination (id, vendor, about, notes, wage_factor, price_factor) VALUES (5, 1, "FK", "Fort Kearney", 80, 100);
INSERT INTO the_eureka_trail.destination (id, vendor, about, notes, wage_factor, price_factor) VALUES (7, 0, "CR", "Chomney Rock", 100, 100);
INSERT INTO the_eureka_trail.destination (id, vendor, about, notes, wage_factor, price_factor) VALUES (9, 1, "FL", "Fort Laramie", 50, 20);
INSERT INTO the_eureka_trail.destination (id, vendor, about, notes, wage_factor, price_factor) VALUES (11, 0, "IR", "Independence Rock", 100, 100);
INSERT INTO the_eureka_trail.destination (id, vendor, about, notes, wage_factor, price_factor) VALUES (13, 1, "FB", "Fort Bringer", 100, 100);
INSERT INTO the_eureka_trail.destination (id, vendor, about, notes, wage_factor, price_factor) VALUES (15, 0, "SS", "Soda Springs", 100, 100);
INSERT INTO the_eureka_trail.destination (id, vendor, about, notes, wage_factor, price_factor) VALUES (17, 0, "FH", "Fort Hall", 100, 100);
INSERT INTO the_eureka_trail.destination (id, vendor, about, notes, wage_factor, price_factor) VALUES (19, 1, "CoR", "City of Rocks ", 100, 100);
INSERT INTO the_eureka_trail.destination (id, vendor, about, notes, wage_factor, price_factor) VALUES (21, 1, "HRS", "Humboldt River Settlement", 100, 100);
INSERT INTO the_eureka_trail.destination (id, vendor, about, notes, wage_factor, price_factor) VALUES (23, 1, "FMD", "Forty Mile Desert", 100, 100);
INSERT INTO the_eureka_trail.destination (id, vendor, about, notes, wage_factor, price_factor) VALUES (25, 1, "R", "Reno", 100, 100);
INSERT INTO the_eureka_trail.destination (id, vendor, about, notes, wage_factor, price_factor) VALUES (27, 1, "E", "Eureka", 100, 1);

INSERT INTO the_eureka_trail.segment (id, length, hunting_score, fishing_score, gathering_score, terrain_score) VALUES (2, 175, 10, 5, 2, 10);
INSERT INTO the_eureka_trail.segment (id, length, hunting_score, fishing_score, gathering_score, terrain_score) VALUES (4, 183, 0, 0, 1, 10);
INSERT INTO the_eureka_trail.segment (id, length, hunting_score, fishing_score, gathering_score, terrain_score) VALUES (6, 244, 5, 5, 2, 10);
INSERT INTO the_eureka_trail.segment (id, length, hunting_score, fishing_score, gathering_score, terrain_score) VALUES (8, 75, 6, 7, 8, 10);
INSERT INTO the_eureka_trail.segment (id, length, hunting_score, fishing_score, gathering_score, terrain_score) VALUES (10, 173, 10, 5, 10, 10);
INSERT INTO the_eureka_trail.segment (id, length, hunting_score, fishing_score, gathering_score, terrain_score) VALUES (12, 221, 7, 8, 5, 10);
INSERT INTO the_eureka_trail.segment (id, length, hunting_score, fishing_score, gathering_score, terrain_score) VALUES (14, 137, 10, 5, 2, 10);
INSERT INTO the_eureka_trail.segment (id, length, hunting_score, fishing_score, gathering_score, terrain_score) VALUES (16, 64, 10, 5, 2, 10);
INSERT INTO the_eureka_trail.segment (id, length, hunting_score, fishing_score, gathering_score, terrain_score) VALUES (18, 113, 10, 5, 2, 10);
INSERT INTO the_eureka_trail.segment (id, length, hunting_score, fishing_score, gathering_score, terrain_score) VALUES (20, 117, 10, 5, 2, 10);
INSERT INTO the_eureka_trail.segment (id, length, hunting_score, fishing_score, gathering_score, terrain_score) VALUES (22, 277, 10, 5, 2, 10);
INSERT INTO the_eureka_trail.segment (id, length, hunting_score, fishing_score, gathering_score, terrain_score) VALUES (24, 106, 10, 5, 2, 10);
INSERT INTO the_eureka_trail.segment (id, length, hunting_score, fishing_score, gathering_score, terrain_score) VALUES (26, 91, 10, 5, 2, 10);
