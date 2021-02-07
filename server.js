// DEPENDENCIES
// Npm packages that we will use to give our server useful functionality

const fs = require("fs");
const express = require('express');
const path = require("path");


// Intialize express app

const app = express();

// Sets an initial port. We"ll use this later in our listener

const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('./develop/public'));

//Require routes file

require("./develop/routes/apiRoutes")(app);
require("./develop/routes/htmlRoutes")(app);



// Tells node that we are creating an "express" server
const dbJson = require("./develop/db/db.json");


// Setup Listener 


app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});