const knex = require("knex");
const config = require("../../knexfile");

const cn = knex(config.development);

module.exports = cn;
