const { readQuery } = require('../../queryExecution/prodQueryExecution');
const { writeQuery } = require('../../queryExecution/prodQueryExecution');

let updateHospital = async (req, res) => {
	if(!req.body.hospital_id || !req.body.status_id || !req.body.address || !req.body.registeration_id) {
		res.status(200).send({status : 500, message : 'Incomplet Parameters!', data : {hospital_id : 0}});
	}
	try{
		let update_hospital_query = `UPDATE hospitals
							SET status_id = ?,
							registeration_id = ?,
							address = ?,
							WHERE id = ?`;

		let hospital = await writeQuery(update_hospital_query, [req.body.status_id, req.body.registeration_id, req.body.address, req.body.hospital_id])

		res.status(200).send({status : 200, message : 'Status updated', data : {hospital_id : hospital_id}});
	} catch(e) {
		console.log(e)
		res.status(500).send({status : 500, message : 'Internal Server Error!', data : {hospital_id : 0}});
	}
}