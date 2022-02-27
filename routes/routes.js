const express = require('express');
var router = express.Router();

const { addPatient } = require('../controllers/addPatient');
const { updatePatient } = require('../controllers/updatePatient');
const { addHospital } = require('../controllers/addHospital');
const { updateHospital } = require('../controllers/updateHospital');
const { getAvailability } = require('../controllers/getAvailability');
const { createBooking } = require('../controllers/createBooking');
const { updateBooking } = require('../controllers/updateBooking');
const { getBookingDetails } = require('../controllers/getBookingDetails');


router.route('/addPatient').post(addPatient);
router.route('/updatePatient').post(updatePatient);
router.route('/addHospital').post(addHospital);
router.route('/updateHospital').post(updateHospital);
router.route('/getAvailability').get(getAvailability);
router.route('/createBooking').post(createBooking);
router.route('/updateBooking').post(updateBooking);
router.route('/bookingDetails').get(bookingDetails);