// import the promised query from db folder

const query = require("../db/utils");

const findAllAbility = async () => {
    return query("SELECT * FROM ability");
}
const findAllHistory = async () => {
    return query("SELECT * FROM history");
}

module.exports = { findAllAbility, findAllHistory }