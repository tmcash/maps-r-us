const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class City extends Model {}

City.init (
{
    name: {
        type: DataTypes.STRING,
        allowNull: false
},
    activities: {
        type: DataTypes.STRING,
        allowNull: false
},
    restaurants: {
        type: DataTypes.STRING,
        allowNull: false
},
    hotels: {
        type: DataTypes.STRING,
        allowNull: false
}
}, 
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'city',
});

// Sync the model with the database


module.exports = City;