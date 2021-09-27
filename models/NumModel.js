const mongoose = require('mongoose');

const numSchema = new mongoose.Schema(
    {
      num: { type: Number, required: true }
    },
    {
      timestamps: true,
    }
  );
  
  const Num = mongoose.model('Num', numSchema);
  
  // export default Product;
  module.exports = Num;