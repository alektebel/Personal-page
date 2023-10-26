const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const submissionSchema = new Schema({
  name: String,
  email: String,
  subject: String,
  message: String,
});

const Submission = mongoose.model('Submission', submissionSchema);

module.exports = Submission;
