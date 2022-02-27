const { readQuery } = require('../../queryExecution/prodQueryExecution');
const { writeQuery } = require('../../queryExecution/prodQueryExecution');

let updatePatient = async (req, res) => {
	if(!req.body.patient_id || !req.body.condition_type_id || !req.body.status_id) {
		res.status(200).send({status : 500, message : 'Incomplet Parameters!', data : {patient_id : 0}});
	}
	try{
		let update_patient_query = `UPDATE patients
							SET condition_type_id = ?,
							status_id = ?
							WHERE id = ?`;

		let patient = await writeQuery(update_patient_query, [req.body.condition_type_id, req.body.status_id, req.body.patient_id])

		res.status(200).send({status : 200, message : 'Status updated', data : {patient_id : patient.insertId}});
	} catch(e) {
		console.log(e)
		res.status(500).send({status : 500, message : 'Internal Server Error!', data : {patient_id : 0}});
	}
}