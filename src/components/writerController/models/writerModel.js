const { Model } = require('objection');
const knex = require('../../../db/knex')
const ActorsMovies = require ("../../movieController/models/movieModel.js")


Model.knex(knex)
class writerModel extends Model {
  static get tableName() {
    return 'writers';
  }
  static get idColumn() {
    return 'movies_id'
}
  static get relationMappings() {
    return {
  allMovies: {
    relation: Model.ManyToManyRelation,
    modelClass: ActorsMovies,
    join: {
        from: 'movies.id',
        to: 'writers.movies_id'
    }
}
    }
  }
}
class ModelW extends Model {
  static get tableName() {
    return 'movies';
  }
  static get idColumn() {
    return 'writers_id'
}
  static get relationMappings() {
    return {
  writers: {
    relation: Model.ManyToManyRelation,
    modelClass: writersDetails,
    join: {
        from: 'writers.id',
        to: 'movies.writers_id'
    }
}
    }
  }
}

module.exports = {writerModel,ModelW};