const mongoose = require('mongoose'); 

const ContactSchema = mongoose.Schema({ 
    contact:{
        type:String
    }
    ,time_expires:{
        type: Date,
        default: Date.now()
    }

}); 

module.exports = mongoose.model("Otp",ContactSchema);