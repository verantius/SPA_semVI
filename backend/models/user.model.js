const mongoose = require('mongoose')

const userModel = mongoose.Schema(
  {
    //_id: mongoose.Types.ObjectId,
    email: {
      type: String,
      required: true,
      unique: true,
      minlength: 3,
      maxLength : 16
    },
    password: {
      type: String,
      required: true,
      minlength: 3,
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('User', userModel)