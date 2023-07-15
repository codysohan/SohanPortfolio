const express = require("express");
const path = require("path");
const app = express();
const port = 80;

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded()); // For taking data of forms inputs

app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory

// ENDPOINTS
app.get('/', (req, res) => {
    res.status(200).render('home.pug');
  });

app.get('/contact', (req, res) => {
  res.status(200).render('contact.pug');
})

app.get('/projects', (req, res) => {
  res.status(200).render('projects.pug');
})

app.get('/resume', (req, res) => {
  res.status(200).render('resume.pug');
})

function removePlaceholder(input) {
  input.placeholder = "";
}

// START THE SERVER
app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`);
  });
  