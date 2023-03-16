const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Food extends Model {}

Food.init(
{
    id: {
    type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
    },
    hours: {
      type: DataTypes.STRING,
    },
    city_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'city',
        key: 'id',
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      // references the user's id
      references: {
        model: 'User',
        key: 'id'
      }
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'food',
  }
);

module.exports = Food;
