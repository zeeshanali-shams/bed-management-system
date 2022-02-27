CREATE TABLE `users` (
  `id` bigint(22) NOT NULL AUTO_INCREMENT,
  `user_type_id` int(2) DEFAULT 1,
  `name` varchar(50) DEFAULT NULL,
  `govt_id_type` varchar(20),
  `govt_id_number` varchar(20),
  `address` varchar(300) DEFAULT NULL,
  `status_id` int(2) DEFAULT 1,
  `condition_type_id` int(2) DEFAULT 1,
  PRIMARY KEY (`id`)
);


CREATE TABLE `hospitals` (
  `id` bigint(22) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `registeration_id` varchar(20) DEFAULT NULL,
  `address` varchar(300) DEFAULT NULL,
  `status_id` int(2) DEFAULT 1,
  PRIMARY KEY (`id`)
);


CREATE TABLE `beds` (
  `id` bigint(22) NOT NULL AUTO_INCREMENT,
  `hospital_id` bigint(22) DEFAULT NULL,
  `bed_type_id` int(2) DEFAULT 1,
  `allotted_user_id` bigint(22) DEFAULT NULL,
  `status_id` int(2) DEFAULT 1, 
  PRIMARY KEY (`id`),
  KEY `bedsx1` (`beds`)
);


CREATE TABLE `bookings` (
  `id` bigint(22) NOT NULL AUTO_INCREMENT,
  `user_id` bigint(22) DEFAULT NULL,
  `bed_type_id` int(2) DEFAULT 1,
  `allotted_bed_id` bigint(22) DEFAULT NULL,
  `status_id` int(2) DEFAULT 1, 
  `start_dt` int(11) DEFAULT NULL,
  `end_dt` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `bedsx1` (`beds`)
);


CREATE TABLE `lookups` (
  `id` bigint(22) NOT NULL AUTO_INCREMENT,
  `lookup_cd` varchar(100) NOT NULL,
  `value_id` int(3) DEFAULT '0',
  `value_cd` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `lookups_uix1` (`lookup_cd`,`value_cd`),
  UNIQUE KEY `lookups_uix2` (`lookup_cd`,`value_desc`),
  UNIQUE KEY `lookups_uix3` (`lookup_cd`,`value_id`)
) ;


INSERT INTO `lookups`
(
  `lookup_cd`,
  `value_id`,
  `value_cd`
)
VALUES 
(
  'user_type_id'
  1
  'patient'
);

INSERT INTO `lookups`
(
  `lookup_cd`,
  `value_id`,
  `value_cd`
)
VALUES 
(
  'user_type_id'
  2
  'doctor'
);

INSERT INTO `lookups`
(
  `lookup_cd`,
  `value_id`,
  `value_cd`
)
VALUES 
(
  'user_type_id'
  3
  'attendants'
);

INSERT INTO `lookups`
(
  `lookup_cd`,
  `value_id`,
  `value_cd`
)
VALUES 
(
  'user_status_id'
  1
  'created'
);


INSERT INTO `lookups`
(
  `lookup_cd`,
  `value_id`,
  `value_cd`
)
VALUES 
(
  'user_status_id'
  2
  'admitted'
);


INSERT INTO `lookups`
(
  `lookup_cd`,
  `value_id`,
  `value_cd`
)
VALUES 
(
  'user_status_id'
  3
  'under_observation'
);

INSERT INTO `lookups`
(
  `lookup_cd`,
  `value_id`,
  `value_cd`
)
VALUES 
(
  'user_status_id'
  4
  'under_treatment'
);


INSERT INTO `lookups`
(
  `lookup_cd`,
  `value_id`,
  `value_cd`
)
VALUES 
(
  'user_status_id'
  5
  'discharged'
);


INSERT INTO `lookups`
(
  `lookup_cd`,
  `value_id`,
  `value_cd`
)
VALUES 
(
  'user_status_id'
  6
  'deceased'
);
// To be filled accordingly as mentioned below


/*
Taken lookups :- 

user_type_id
1. patient 
2. doctor
3. attendants

user_status_id
1. created
2. admitted
3. under_observation
4. under_treatment
5. discharged
6. deceased

user_condition_type_id
1. mild
2. severe
3. critical
4. recovered

hospital_status_id
1. created
2. operational
3. housefull
4. closed
5. unavailable

bed_type_id
1. free
2. paid
3. premium

bed_status_id
1. available
2. booked
3. occupied
4. in maintainence 

booking_status_id 
1. created
2. paid
3. live
4. cancelled
5. completed
*/

















