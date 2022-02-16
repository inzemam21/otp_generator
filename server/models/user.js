const moment = require('moment')

module.exports = function(sequelize, DataTypes) {
	
	const User =  sequelize.define('users', {
		id: {
			type: DataTypes.UUID,
			primaryKey: true,
			defaultValue: DataTypes.UUIDV4,
		},
        name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		otp: {
			type: DataTypes.STRING,
		},
		otp_expiration_date:{type: DataTypes.STRING},
		phone_number: {
			type: DataTypes.STRING,
			defaultValue: null,
			unique: true,
			allowNull: true,
			
		},
		     
		});
 return User

	};