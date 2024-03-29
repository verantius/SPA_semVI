const mongoose = require('mongoose')

const badaniaModel = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      //type: String,
      required: true,
      ref: 'User',
    },
    produkt: {
      type: String,
      //required: true,
    },
    firma: {
      type: String,
      //required: true,
    },
    produkcja: {
      type: String,
      //required: true,
    },
    info: {
      type: String,
      //required: true,
    },
    zbadano: {
      type: String,
      //required: true,
    },
    //startdate: { type: Date, required: true },
  },
  {
    timestamps: true,
  }
)
module.exports = mongoose.model('Badania', badaniaModel)
