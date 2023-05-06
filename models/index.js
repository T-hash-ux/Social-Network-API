// The purpose of this model is to make the User and Thought models available for use in other parts of the application by importing them from their respective files and exporting them as a single object.
const User = require('./User');
const Thought = require('./Thought');

module.exports = { User, Thought };