var mongoose = require('mongoose');

var jobPostSchema = new mongoose.Schema({
    jobTitle: String,
    discipline: [{type: String}],
    type: String,
    briefDescription: String,
    description: String,
    responsibilities: String,
    skills: String
}, { timestamps: true });

mongoose.model('jobPost', jobPostSchema);