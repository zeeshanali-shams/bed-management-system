const { readQuery } = require('../../queryExecution/prodQueryExecution');
const { writeQuery } = require('../../queryExecution/prodQueryExecution');

let createBooking = async (req, res) => {
	if(!req.body.user_id || !req.body.bed_type_id || !req.body.start_dt || !req.body.end_dt) {
		res.status(200).send({status : 500, message : 'Incomplet Parameters!', data : {booking_id : 0}});
	}
	try{
		let add_booking_query = `INSERT INTO bookings
							(
								user_id,
								bed_type_id,
								status_id,
								start_dt,
								end_dt
							)
							VALUES
							(
								?,
								?,
								?,
								?,
								?
							)`;

		let booking = await writeQuery(add_booking_query, [req.body.user_id, req.body.bed_type_id, 1, req.body.start_dt, req.body.end_dt])

		res.status(200).send({status : 200, message : 'Success', data : {booking_id : booking.insertId}});
	} catch(e) {
		console.log(e)
		res.status(500).send({status : 500, message : 'Internal Server Error!', data : {booking_id : 0}});
	}
}