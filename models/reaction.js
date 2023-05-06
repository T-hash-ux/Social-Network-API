// The overall purpose of this model is to define the schema for a reaction in a system using Mongoose, which is an Object Data Modeling (ODM) library for MongoDB in Node.js.
const { Schema, Types } = require('mongoose');
const moment = require('moment');


const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280
        },
        username: {
            type: String,
            required: true,

        },
        createAt: {
            type: Date,
            default: Date.now,
            // get: createdAtVal => dateFormat(createdAtVal)
        },
        // reactions: [reactionSchema],
    },
    {
        toJSON: {
            getters: true
        },
        id: false,
    }
);

module.exports = reactionSchema;