const movies = require('./models/movieModel')

exports.createMovie = async function (req, res) {
    // console.log(req)
    await movies.query().insert({
        MovieName: req.body.MovieName,
        ActorName: req.body.ActorName,
    })
    // .eager('[users, address]')
    res.json({ success: true, message: 'ok' });
};

exports.readData = async function (req, res) {
let id = parseInt(req.params.id)
await movies.query()
        .where('id', id)
        .eager('address')
        .then(user => {
            res.json(user)
        })
    }