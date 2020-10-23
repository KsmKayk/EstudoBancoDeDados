const db = require("./db/models")
const { Op } = require("sequelize");

module.exports = {
  async index(req, res) {
    const resultSelect = await db.DbTest.findAll();
  },
  async store(req, res) {
    const {text, isTrue, integerNumber,decimal,dateOnly,dateTime} = req.body;
    //const resultInsert = await db.DbTest.create({})
  },
  async update(req, res) {},
  async delete(req, res) {},
}