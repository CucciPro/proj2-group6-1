use proj2_group6_db;

-- users can have multiple plants
-- each plant can have multiple history records
-- users.userid matches on plants.userid
-- plants.plant_id matches on plant_history.plantid

insert into users
        (uname, uemail, upass)
    values
        ('Gwen', 'nnormansv+proj2.user01@gmail.com', '9635')

insert into plants
        (userid, botanical_name, common_name, plant_type, acquired_date,acquired_source,acquired_origin,acquired_width,acquired_height,acquired_additional_info, care_hardiness_zones,care_sun_tolerance, care_drainage,care_water_requirements,care_feeding_schedule,care_growth_rate,care_mature_width,care_mature_height,care_spacing,care_depth,care_when_to_plant,care_additional_info)
    values
        (1, 'Laurus Nobilis', 'Bay Leaf', 'Tree', TIMESTAMP('2019-05-23'),'Lowe''s','Civano Growers',7,10,'The tree has lots of bright green leaves and new growth.', '10-12','Full sun : 6 hours+ of direct sunlight.  Partial sun : 3-6 hours of sunlight.','Well drained','Once established, water occasionally; more in extreme heat or containers.','Beginning of spring and late fall.','Moderate',60,300,120,48,'Spring','This is additioinal information about how to care for the plant ...');

insert into plant_histoy
        (plant_id, dtstamp, rec_type, loc,in_ground,direct_sunlight_hours,watering_schedule,additional_info)
    values
        (1, TIMESTAMP('2019-05-24'), 'General', 'Outdoors',0,8,'Morning','Planted.  Can''t wait to cook with my bay leaves.'),
        (1, TIMESTAMP('2019-06-08'), 'General', 'Outdoors',0,8,'Morning & Afternoon','Some leaves are starting to turn brown.  Adding additional watering in the afteroon, at least until temperatures drop back to below 93 degrees.'),
        (1, TIMESTAMP('2019-09-15'), 'Feeding', 'Outdoors',0,8,'Morning','Fed 1/2 cup of x brand plant food.');