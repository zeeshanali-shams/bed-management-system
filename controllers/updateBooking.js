const { readQuery } = require('../../queryExecution/prodQueryExecution');
const { writeQuery } = require('../../queryExecution/prodQueryExecution');

let updateBooking = async (req, res) => {
	if(!req.body.bookinh_id || !req.body.bed_type_id || !req.body.allotted_bed_id || !req.body.status_id || !req.body.start_dt || !req.body.end_dt) {
		res.status(200).send({status : 500, message : 'Incomplet Parameters!', data : {hospital_id : 0}});
	}
	try{
		let update_booking_query = `UPDATE hospitals
							SET bed_type_id = ?,
							allotted_bed_id = ?,
							status_id = ?,
							start_dt = ?,
							end_dt = ?,
							WHERE id = ?`;

		let booking = await writeQuery(update_booking_query, [req.body.bed_type_id, req.body.allotted_bed_id, req.body.status_id, req.body.start_dt, req.body.end_dt, req.body.booking_id])

		res.status(200).send({status : 200, message : 'Status updated', data : {booking_id : booking_id}});
	} catch(e) {
		console.log(e)
		res.status(500).send({status : 500, message : 'Internal Server Error!', data : {hospital_id : 0}});
	}
}