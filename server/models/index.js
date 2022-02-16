const {Sequelize, DataTypes} = require("sequelize");
const dotenv = require('dotenv')

dotenv.config()

const sequelize = new Sequelize("otp_generator", process.env.DB_USERNAME, process.env.DB_PASSWORD, {
  dialect: "mysql",
  host: "localhost",
  pool: {max:5,min:0,idle:10000}
});

module.exports = sequelize;

sequelize.authenticate().then(
    () => console.log('connected')
).catch(err => console.log("error" + err))

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.user = require('./user')(sequelize, DataTypes)

db.sequelize.sync({ force: false })
.then(() => {
    console.log('yes re-sync done!')
})

module.exports = db
  