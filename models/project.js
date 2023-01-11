const mongoose = require('mongoose')

const ProjectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Pas de nom'],
    },
    description: {
        type: String,
        required: [true, 'Pas de prénom'],
    }
})

const ProjectModel = mongoose.model('Projects', ProjectSchema);

module.exports = ProjectModel