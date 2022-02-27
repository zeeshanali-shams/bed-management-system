const { readQuery } = require('../../queryExecution/prodQueryExecution');
const { writeQuery } = require('../../queryExecution/prodQueryExecution');

let addHospital = async (req, res) => {
	if(!req.param.availability_filters) {
		res.status(200).send({status : 500, message : 'Incomplet Parameters!', data : {availble_beds : []}});
	}
	try{
		let availability_filters = req.param.availability_filters;

		let filter_query_statement = '';

		if(availability_filters.hospital) {
			filter_query_statement += ` AND hospital_id in (${availability_filters.hospital})` 
		}
		if(availability_filters.bed_type) {
			filter_query_statement += ` AND bed_type_id in (${availability_filters.bed_type})` 
		}

		let availble_beds_query = `SELECT h.id, h.name, h.address, b.bed_type_id, count(b.id) available_count
								FROM hospitals h
								JOIN beds b ON h.id = b.hospital_id
								WHERE b.status_id = 1
								${filter_query_statement}
								GROUP BY h.id, b.bed_type_id`;

		let availble_beds = await readQuery(availble_beds_query, [])

		res.status(200).send({status : 200, message : 'Success', data : {availble_beds : availble_beds}});
	} catch(e) {
		console.log(e)
		res.status(500).send({status : 500, message : 'Internal Server Error!', data : {availble_beds : []}});
	}
}