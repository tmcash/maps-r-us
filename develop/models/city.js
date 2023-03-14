const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
host: 'localhost',
dialect: 'mysql'
});

const City = sequelize.define('City', {
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
});

// Sync the model with the database
City.sync({ force: true })
.then(() => {
    console.log('City table created');
})
.catch((error) => {
    console.error('Error creating City table:', error);
});