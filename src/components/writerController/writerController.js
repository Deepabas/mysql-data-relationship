const writers = require('./models/writerModel')

exports.createWriter = async function (req, res) {
    // console.log(req)
    await writers.query().insert({
        writerName: req.body.writerName,
        booksName: req.body.booksName,
    })
    .eager('allMovies')
    res.json({ success: true, message: 'ok' });
};


exports.readUser = async function (req, res) {
	await writers.query()
		.then(users => {
			res.json(users)
		})
};

exports.getData = async function (req, res) {
let id = parseInt(req.params.id)
await writers.query()
        .where('id', id)
        .eager('[allMovies,allAddress]')
        .then(user => {
            res.json(user)
        })
    }