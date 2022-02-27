const { readQuery } = require('../../queryExecution/prodQueryExecution');
const { writeQuery } = require('../../queryExecution/prodQueryExecution');

let addPatient = async (req, res) => {
	if(!req.body.name || !req.body.govt_id_type || !req.body.govt_id_number || !req.body.address || !req.body.condition_type_id) {
		res.status(200).send({status : 500, message : 'Incomplet Parameters!', data : {patient_id : 0}});
	}
	try{
		let add_patient_query = `INSERT INTO patients
							(
								user_type_id,
								name,
								govt_id_type,
								govt_id_number,
								address,
								condition_type_id,
								status_id
							)
							VALUES
							(
								?,
								?,
								?,
								?,
								?,
								?,
								?
							)`;

		let patient = await writeQuery(add_patient_query, [1, req.body.name, req.body.govt_id_type, req.body.govt_id_number, req.body.address, req.body.condition_type_id, 1])

		res.status(200).send({status : 200, message : 'Success', data : {patient_id : patient.insertId}});
	} catch(e) {
		console.log(e)
		res.status(500).send({status : 500, message : 'Internal Server Error!', data : {patient_id : 0}});
	}
}