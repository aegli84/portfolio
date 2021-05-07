const mongoose = require('mongoose')

const contact = new mongoose.Schema ({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/],
        required: true
    },
    message: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model('form', contact)