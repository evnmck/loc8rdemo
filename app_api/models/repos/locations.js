"use strict";
let sql = require('../sql/').locations; //sqlProvider for locations
module.exports = (db) => {
    return {

        create: values => db.oneOrNone(sql.create, values),

        readOne: value => db.one(sql.readOne, value),

        updateOne: value => db.none(sql.updateOne, value),

        deleteOne: value => db.none(sql.deleteOne, value)
    };
};