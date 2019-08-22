const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    gpa: Number,
    major: String
});

module.exports = mongoose.model('students',studentSchema);