const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
    name: String,
    subject: String,
    email: String,
    classroom: Number
});

module.exports = mongoose.model('teachers', teacherSchema);