const { readQuery } = require('../../queryExecution/prodQueryExecution');
const { writeQuery } = require('../../queryExecution/prodQueryExecution');

let addHospital = async (req, res) => {
	if(!req.body.name || !req.body.registeration_id || !req.body.address || !req.body.status_id) {
		res.status(200).send({status : 500, message : 'Incomplet Parameters!', data : {hospital_id : 0}});
	}
	try{
		let add_hospital_query = `INSERT INTO hospitals
							(
								name,
								registeration_id,
								address,
								status_id
							)
							VALUES
							(
								?,
								?,
								?,
								?
							)`;

		let hospital = await writeQuery(add_hospital_query, [req.body.name, req.body.registeration_id, req.body.address, 1])

		res.status(200).send({status : 200, message : 'Success', data : {hospital_id : hospital.insertId}});
	} catch(e) {
		console.log(e)
		res.status(500).send({status : 500, message : 'Internal Server Error!', data : {hospital_id : 0}});
	}
}