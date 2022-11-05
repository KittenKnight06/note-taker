//require dependencies
const express = require('express');

const app = express();

//create a PORT variable
const PORT = process.env.PORT || 5500;

//set up express to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

const apiRoutes = require("./routes/apiRoutes");
app.use(apiRoutes);
const htmlRoutes = require("./routes/htmlRoutes");
app.use(htmlRoutes);

//create server listener
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));