const mongoose = require('mongoose')

const ProjectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Pas de nom'],
    },
    description: {
        type: String,
        required: [true, 'Pas de description'],
    },
    image:{
        type: String,
        required:[true, "Pas d'image lié"]
    },
    githubLink:{
        type: String,
        required:[true, 'Pas de repository lié']
    }
})

const ProjectModel = mongoose.model('Projects', ProjectSchema);

module.exports = ProjectModel