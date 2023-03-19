// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/connection');

// class Hotel extends Model {}

// Hotel.init(
// {
//     id: {
//     type: DataTypes.INTEGER,
//       allowNull: false,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     type: {
//       type: DataTypes.STRING,
//     },
//     address: {
//       type: DataTypes.STRING,
//     },
//     city_id: {
//       type: DataTypes.INTEGER,
//       references: {
//         model: 'city',
//         key: 'id',
//       },
//     },
//     user_id: {
//         type: DataTypes.INTEGER,
//         // references the user's id
//         references: {
//           model: 'User',
//           key: 'id'
//         }
//       },
//   },
//   {
//     sequelize,
//     freezeTableName: true,
//     underscored: true,
//     modelName: 'hotel',
//   }
// );

// module.exports = Hotel;
