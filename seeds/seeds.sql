use proj2_group6_db;

-- general flow of the app :
-- users create species.  species are unique.  example : bay leaf tree
-- users create plants.  each plant is tied to a user and must have a species assigned.
-- users can create multiple plants of the same species.  the identifier is how the user can differentiate between multiple plants of the same species.  for example, a user has two bay leaf trees.  one bay leaf tree's identifier is 'Southeastern Most Bay Leaf' and the other bay leaf tree's identifier is 'Southwestern Most Bay Leaf'
-- users can create multiple history records for each plant.

-- how tables relate :
-- users.userid matches on my_plants.userid
-- my_plants.species_id matches on species.species_id
-- plants.plant_id matches on plant_history.plant_id

insert into users
        (user_name, user_email, user_pass)
    values
        ('Gwen', 'nnormansv+proj2.user01@gmail.com', '9635')

insert into plant_species
        (botanical_name, common_name, plant_type, hardiness_zones,sun_tolerance, drainage,water_requirements,feeding_schedule,growth_rate,mature_width,mature_height,spacing,depth,when_to_plant,additional_info)
    values
        ('Laurus Nobilis', 'Bay Leaf', 'Tree', TIMESTAMP('2019-05-23'),'Lowe''s','Civano Growers',7,10,'The tree has lots of bright green leaves and new growth.', '10-12','Full sun : 6 hours+ of direct sunlight.  Partial sun : 3-6 hours of sunlight.','Well drained','Once established, water occasionally; more in extreme heat or containers.','Beginning of spring and late fall.','Moderate',60,300,120,48,'Spring','This is additioinal information about how to care for the plant ...');

-- records must have userid and species
insert into my_plants
        (user_id, species_id, identifier, acquired_date,acquired_source,acquired_origin,acquired_width,acquired_height,acquired_additional_info)
    values
        (1, 1, '1st Bay Leaf Tree Along Back Wall', TIMESTAMP('2019-05-23'),'Lowe''s','Civano Growers',7,10,'The tree has lots of bright green leaves and new growth.'),
        (1, 1, '2nd Bay Leaf Tree Along Back Wall', TIMESTAMP('2019-05-23'),'Lowe''s','Civano Growers',7,10,'The tree has lots of bright green leaves and new growth.');

-- records must have plant_id
insert into plant_histoy
        (plant_id, dtstamp, rec_type, loc,in_ground,direct_sunlight_hours,watering_schedule,additional_info)
    values
        (1, TIMESTAMP('2019-05-24'), 'General', 'Outdoors',0,8,'Morning','Planted.  Can''t wait to cook with my bay leaves.'),
        (1, TIMESTAMP('2019-06-08'), 'General', 'Outdoors',0,8,'Morning & Afternoon','Most leaves have turned brown.  Adding additional watering in the afteroon, at least until temperatures drop back to below 93 degrees.'),
        (1, TIMESTAMP('2019-09-15'), 'Feeding', 'Outdoors',0,8,'Morning','Fed 1/4 cup of x brand plant food.'),
        (2, TIMESTAMP('2019-05-24'), 'General', 'Outdoors',0,8,'Morning','Planted.  Can''t wait to cook with my bay leaves.'),
        (2, TIMESTAMP('2019-06-08'), 'General', 'Outdoors',0,8,'Morning & Afternoon','Some leaves are starting to turn brown.  Adding additional watering in the afteroon, at least until temperatures drop back to below 93 degrees.'),
        (2, TIMESTAMP('2019-09-15'), 'Feeding', 'Outdoors',0,8,'Morning','Fed 1/2 cup of x brand plant food.');