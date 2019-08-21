DROP DATABASE the_eureka_trail;

CREATE DATABASE the_eureka_trail;

CREATE TABLE the_eureka_trail.player (
    id SMALLINT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
    google_oauth VARCHAR(1250) NOT NULL,
    facebook_oauth VARCHAR(1250) NOT NULL,
    firstname VARCHAR(255) NOT NULL,
    lastname VARCHAR(255) NOT NULL,
    authenticated BOOLEAN NOT NULL
);

CREATE TABLE the_eureka_trail.plays_in (
    player_id INT UNSIGNED NOT NULL,
    caravan_id INT UNSIGNED NOT NULL,
    character_id INT UNSIGNED NOT NULL
);

CREATE TABLE the_eureka_trail.caravan (
    id SMALLINT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    location_id INT UNSIGNED DEFAULT 0,
    launched SMALLINT UNSIGNED DEFAULT 0,
    owner_id SMALLINT UNSIGNED NOT NULL,
    private SMALLINT UNSIGNED NOT NULL,
    join_code VARCHAR(10) NOT NULL,
    player_max SMALLINT NOT NULL,
    player_count SMALLINT NULL
);

CREATE TABLE the_eureka_trail.character (
    id INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
    role_id INT UNSIGNED,
    name VARCHAR(255),
    gender INT UNSIGNED,
    max_hp SMALLINT UNSIGNED,
    current_hp SMALLINT UNSIGNED,   
    money INT UNSIGNED,
    wage SMALLINT UNSIGNED,
    total_steps INT UNSIGNED,
    start_date DATE,
    end_date DATE
);

CREATE TABLE the_eureka_trail.role (
    id SMALLINT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    starting_money INT UNSIGNED NOT NULL,
    starting_wage SMALLINT UNSIGNED NOT NULL,
    max_hp INT UNSIGNED NOT NULL,
    description VARCHAR(255) NOT NULL
);

CREATE TABLE the_eureka_trail.character_has_skill (
    character_id SMALLINT UNSIGNED NOT NULL,
    skill_id SMALLINT UNSIGNED NOT NULL
);

CREATE TABLE the_eureka_trail.role_has_skill (
    role_id SMALLINT UNSIGNED NOT NULL,
    skill_id SMALLINT UNSIGNED NOT NULL
);

CREATE TABLE the_eureka_trail.skills (
    id INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    value INT NOT NULL
);

CREATE TABLE the_eureka_trail.character_has_item (
    character_id SMALLINT UNSIGNED NOT NULL,
    item_id SMALLINT UNSIGNED NOT NULL
);

CREATE TABLE the_eureka_trail.role_has_item (
    role_id SMALLINT UNSIGNED NOT NULL,
    item_id SMALLINT UNSIGNED NOT NULL
);

CREATE TABLE the_eureka_trail.items (
    id SMALLINT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    price SMALLINT UNSIGNED NOT NULL,
    description VARCHAR (255) NOT NULL
);

CREATE TABLE the_eureka_trail.item_has_skill (
    item_id SMALLINT UNSIGNED NOT NULL,
    skill_id SMALLINT UNSIGNED NOT NULL
);

CREATE TABLE the_eureka_trail.has_steps (
    character_id SMALLINT UNSIGNED NOT NULL,
    step_record_id INT UNSIGNED NOT NULL
);

CREATE TABLE the_eureka_trail.steps (
    id INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
    steps SMALLINT UNSIGNED NOT NULL,
    time_stamp DATE NOT NULL
);

CREATE TABLE the_eureka_trail.location (
    id SMALLINT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    image VARCHAR(255) NOT NULL
);

CREATE TABLE the_eureka_trail.destination (
    id SMALLINT NOT NULL PRIMARY KEY,
    vendor SMALLINT NOT NULL DEFAULT 0,
    about VARCHAR(1024) NOT NULL,
    notes VARCHAR(1024) NOT NULL,
    wage_factor SMALLINT,
    price_factor SMALLINT
);

CREATE TABLE the_eureka_trail.segment (
    id SMALLINT NOT NULL PRIMARY KEY,
    length SMALLINT NOT NULL,
    hunting_score SMALLINT NOT NULL,
    fishing_score SMALLINT NOT NULL,
    gathering_score SMALLINT NOT NULL,
    terrain_score SMALLINT NOT NULL
);