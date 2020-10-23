const db = require("../db/models")
const { Op } = require("sequelize");
const moment = require('moment');


module.exports = {
  async index(req, res) {
    const resultSelect = await db.DbTest.findAll();
    res.json(resultSelect)
  },
  async store(req, res) {
    const {text, isTrue, integerNumber,decimal,dateOnly,dateTime} = req.body;
    let dateOnlyMoment = moment(dateOnly,"DD-MM-YYYY")
    let dateTimeMoment = moment(dateTime,"DD-MM-YYYY hh:mm:ss")
    let dateOnlyFormated = dateOnlyMoment.format("YYYY-MM-DD")
    let dateTimeFormated = dateTimeMoment.format("YYYY-MM-DD hh:mm:ss")
    const resultInsert = await db.DbTest.create({text, isTrue,integerNumber,decimal,dateOnly:dateOnlyFormated,dateTime:dateTimeFormated})
    res.json(resultInsert)
  },
  async update(req, res) {},
  async delete(req, res) {},
}