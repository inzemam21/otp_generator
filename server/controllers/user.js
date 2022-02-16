const asyncHandler = require('express-async-handler')
const db = require('../models')
const { getNewTime } = require('../helpers/getotptime')

var User = db.user

// @desc    Register a new user
// @route   POST /api/users
// @access  Public
exports.registerUser = asyncHandler( async (req, res) => {
    const { name, phone_number } = req.body
 
    const phoneNumberExists = await User.findOne({ where:{phone_number} })
  
    if (phoneNumberExists) {
     return res.status(400).json({error:'phone number already exists'})
    }
  
    const user = await User.create({
      name,
      phone_number
    });
  
    if (user) {
      res.status(200).json({
        id: user.id,
        name: user.name,
        phone_number: user.phone_number
        
      })
    } else {
      return res.status(400).json({error:'Invalid user data'})
    }
  })

// @desc    generate a new OTP
// @route   POST /api/users/generateotp
// @access  Public
exports.generateOTP = asyncHandler( async (req, res) => {

let numberGenerator = (Math.floor(Math.random() * 10000) + 10000).toString().substring(1)

  // add minutes to the current time
    const now = new Date()
    const expiration_time = new Date(now.getTime() + 5 * 60000).toLocaleString();

  const { phone_number } = req.body 
 
   const numberExists = await User.findOne({ where: { phone_number}} )

  if (!numberExists) {
   return res.status(400).json({error:'phone number does not exist'})
  }
  
  numberExists.otp = numberGenerator
  numberExists.otp_expiration_date = expiration_time

  numberExists.save()

  res.json({
    id: numberExists.id
  })

})

// @desc    Verify OTP
// @route   POST /api/users/verifyotp
// @access  Public
exports.verifyOTP = asyncHandler( async (req, res) => {
  
  const id = req.params.user_id
  const otp = req.query.otp
 
  const userExists = await User.findOne({ where: { id}})
  
  if (!userExists) {
   return res.status(400).json({error:'Sorry user with id does not exist'})
  }

 if(userExists.otp !== otp){
  return res.status(400).json({error:'sorry user with that otp does not exists'})
 }
  
  if(userExists.otp_expiration_date < getNewTime()){
    return res.status(400).json({error:'Sorry the otp has been expired'})
  }
  else{
    res.status(200).json({ id: userExists.id})
  } 
})