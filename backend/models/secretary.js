const mongoose = require("mongoose");

const SecretarySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    position: {
        type: String, 
        required: true
    },
    facebook_id: {
        type: String, 
        required: true
    },
    email_id: {
        type: String, 
        required: true
    },
    image: {
        type: String,
        required: true
    },
    phone_number: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model("secretary", SecretarySchema);