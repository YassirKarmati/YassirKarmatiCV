const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Pas de nom'],
    },
    password: {
        type: String,
        required: [true, 'Pas de mot de passe'],
    }
})

const userModel = mongoose.model('Users', userSchema);

module.exports = userModel