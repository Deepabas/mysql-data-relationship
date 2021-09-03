const address = require('./models/addressModel')

exports.createAddress = async function (req, res) {
	// console.log(req)
	await address.query().insert({
		// doorNumber: req.body.doorNumber,
		// area: req.body.area,
		city: req.body.city,
		pincode: req.body.pincode
	})
	.eager('[users, address]')
	res.json({ success: true, message: 'ok' });
};