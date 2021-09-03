const { Model } = require('objection');
const knex = require('../../../db/knex')
Model.knex(knex)
const UserDetails = require ('../models/userModel');
const BookWriters = require ('../../writerController/models/writerModel');



class Users extends Model {

    static get tableName() {
        return 'fullDetails'
    }

    static get idColumn() {
        return 'id'
    }

    static get relationMappings() {
        return {
            userDetails: {
                relation: Model.HasOneRelation,
                modelClass: UserDetails,
                join: {
                    from: 'users.id',
                    to: 'fullDetails.id'
                },
            },
            writers: {
                relation: Model.BelongsToOneRelation,
                // modelClass: BookWriters,
                join: {
                    from: 'writers.id',
                    to: 'fullDetails.id'
                }
            },
                    }
    }

}

module.exports = Users;
