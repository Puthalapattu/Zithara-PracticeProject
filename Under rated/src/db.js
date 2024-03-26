const mango = require("magoose");

const mangoose = mango.connect("mongodb://192.168.0.120:27017/");

module.exports = mangoose;
