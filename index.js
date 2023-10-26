const express = require('express');
const path = require('path');
const ejs = require('ejs');
const mongoose = require('mongoose');
const Project = require('./models/Projects');
const Submission = require('./models/Submissions');



const app = express();

mongoose.connect('mongodb://localhost/personal_ddbb', { useNewUrlParser: true });

app.use(express.urlencoded({ extended: true })); // Middleware for parsing form data
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/projects', async (req, res) => {
  // Fetch data from the "projects" collection
  try {
    const projects = await Project.find({});
    res.render('projects', { projects }); // Pass the projects data to the template
  } catch (error) {
    console.error('Error fetching projects:', error);
    res.status(500).send('Internal Server Error');
  }
});




app.listen(4000, () => {
  console.log('app listening on port 4000');
});

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/resume', (req, res) => {
  res.render('resume');
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

app.post('/submit', async (req, res) => {

  const { name, email, subject, message } = req.body;

  // Process the form data here (e.g., send an email, save to a database, etc.)
  // Create a new Submission document
  const submission = new Submission({
    name: name,
    email: email,
    subject: subject,
    message: message,
  });

  // Save the submission to the database
  try {
    // Save the submission to the database
    await submission.save();
    console.log('Submission saved to the database');
    res.send('Form submitted successfully');
  } catch (error) {
    console.error('Error saving submission to the database:', error);
    res.status(500).send('Internal Server Error');
  }

  res.send('Form submitted successfully'); // You can send a confirmation message
 
});
