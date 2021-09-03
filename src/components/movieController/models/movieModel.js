const { Model } = require('objection');
const knex = require('../../../db/knex')
const AddressDetails = require ("../../addressController/models/addressModel.js");

Model.knex(knex)
class movieModel extends Model {
  static get tableName() {
    return 'movies';
  }
  static get idColumn() {
    return 'address_id'
}
static get relationMappings() {
  return {
    address: {
      relation: Model.HasManyRelation,
      modelClass: AddressDetails,
      join: {
          from: 'address.id',
          to: 'movies.address_id'
      },
  },

    }
}
}

module.exports = movieModel;
