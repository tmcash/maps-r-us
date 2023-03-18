const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Activity extends Model {}

Activity.init(
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
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
    },
    city_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'city_id',
      references: {
        model: 'City',
        key: 'id',
        name: 'fk_activity_city'
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      // references the user's id
      references: {
        model: 'User',
        key: 'id',
        name: 'fk_activity_user'
      }
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'activity',
  }
);



module.exports = Activity;
