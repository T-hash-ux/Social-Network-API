// The overall purpose of this code is to define a Mongoose schema and model for a "Thought" object.
// The code imports necessary dependencies such as the Mongoose library, a date formatting utility, and a reaction schema.

const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');
const reactionSchema = require('./reaction');


const ThoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        maxlength: 280

    },
    createAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => dateFormat(createdAtVal)
    },
    username: {
        type: String,
        required: true,
    },
    reactions: [reactionSchema],
}, 
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false,
        
    }
);

ThoughtSchema.virtual('reactionCount').get(function () {
    return this .reactions.length;
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;