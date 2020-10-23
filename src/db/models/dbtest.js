'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DbTest extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  DbTest.init({
    text: DataTypes.STRING,
    isTrue: DataTypes.BOOLEAN,
    integerNumber: DataTypes.INTEGER,
    decimal: DataTypes.DECIMAL,
    dateOnly: DataTypes.DATEONLY,
    dateTime: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'DbTest',
    underscored: true,
  });
  return DbTest;
};