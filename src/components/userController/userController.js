const users = require('./models/userModel')


exports.readUsers = async function (req, res) {
	users.query()
		.then(users => {
			res.json(users)
		})
};

exports.updateUser = async function (req, res) {
	let id = parseInt(req.params.id)
	await users.query()
		.findById(id)
		.patch(req.body)
		.then(users => {
			res.json(users)
		})
};

exports.removedUser = async function (req, res) {

	// const numDeleted = await Person.query().deleteById(1);

	let id = parseInt(req.params.id)
	await users.query()
		// .findById(id)
		.deleteById(id)
		.then(users => {
			res.json(users)
		})
};


// insert user into user table
exports.createUsers = async function (req, res) {
	// console.log(req)
	await users.query().insert({
		name: req.body.name,
		email: req.body.email,
		password: req.body.password
	})
	// .eager('[users, address]')
	res.json({ success: true, message: 'ok' });
};


