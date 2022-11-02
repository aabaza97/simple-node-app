require("dotenv").config();
const express = require("express");
const app = express();

//body parser config
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//some routings
app.get("/", (req, res) => {
	res.status(200).send("Welcome to Node App, Pirate Boy!");
});

//server
const server = app.listen(process.env.PORT, () => {
	console.info(`Up & Running on port: ${process.env.PORT}`);
});

module.exports = app;
