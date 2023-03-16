const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class UserType extends Model {}

UserType.init(
  {
    //define id columns
    id: {
      type: DataTypes.INTEGER, 
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },

    user_id: {
      type: DataTypes.INTEGER,
      // references the user's id
      references: {
        model: 'User',
        key: 'id'
      }
    },
    //define tag_id column
    type_id: {
      type: DataTypes.INTEGER,
      //references the type id
      references: {
        model: 'tag',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = UserType;