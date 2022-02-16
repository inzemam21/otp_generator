const express = require('express')
const router = express.Router()
const { registerUser, generateOTP, verifyOTP } = require('../controllers/user.js') 

// validators
const { userCreateValidator, runValidation } = require('../validators/validator');



//POST: {{ baseURL }}/users - This will create user in User tables.
router.route('/').post(userCreateValidator,runValidation,registerUser)
//POST: {{ baseURL }}/users/generateOTP body: { "phone_number": "03409439034"} - This will generate a random 4 digit numeric OTP if user phone number exists in the user table. It will save the OTP in users table, setting expiration date to 5 minutes in future and returns user id in response.
router.route('/generateotp').post(generateOTP)
//GET: {{ baseURL }}/users/:user_id/verifyOTP?otp=3490 - This will check if otp_expiration_date < current date and time. It will confirm if otp is correct and sends user object in response. If otp is incorrect, it will send error status.
router.route('/:user_id/verifyotp').get(verifyOTP)



module.exports = router;