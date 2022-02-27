const { readQuery } = require('../../queryExecution/prodQueryExecution');
const { writeQuery } = require('../../queryExecution/prodQueryExecution');

let bookingDetails = async (req, res) => {
	if(!req.param.booking_id) {
		res.status(200).send({status : 500, message : 'Incomplet Parameters!', data : {booking_status : 'Not found', hospital_address : 'Yet to be allotted'}});
	}
	try{
		let booking_query = `SELECT id, status_id, value_cd, allotted_bed_id
						FROM bookings b 
						JOIN lookups l ON l.value_id = b.status_id AND lookup_cd = 'booking_status_id'
						WHERE id = ?`;

		let booking = await readQuery(booking_query, [req.param.booking_id]);

		if(booking[0].status_id < 3) {
			res.status(200).send({status : 200, message : 'Booking Conmfirmed', data : {booking_status : booking[0].value_cd, hospital_address : 'Yet to be allotted'}});
		} 

		let hospital_address_query = `SELECT b.id, h.address
								FROM beds b
								JOIN hospitals h ON h.hospital_id = b.id
								WHERE b.id = ?`;

		let hospital_address = await readQuery(hospital_address_query, [booking[0].allotted_bed_id]);

		res.status(200).send({status : 200, message : 'Success', data : {booking_status : booking[0].value_cd, hospital_address : hospital_address[0].address}});
	} catch(e) {
		console.log(e)
		res.status(500).send({status : 500, message : 'Internal Server Error!', data : {booking_status : 'Not found', hospital_address : 'Yet to be allotted'}});
	}
}