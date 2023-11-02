const mongoose=require('mongoose')
const formEntrySchema = new mongoose.Schema({
    email: String,
    name: String,
    age: String,
    educationLevel: String,
    institute: String,
    study: String,
    notes: String,
    canadaInstitute: String,
    tuitionFee: String,
    whichCountry: String,
    didUDoGic: String,
  });
  
  const FormEntry = mongoose.model("FormEntry", formEntrySchema);
module.exports=FormEntry
