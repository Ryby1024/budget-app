const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const User = new Schema({
    firstname: {
        type: String,
        required: 'First name is required'
    },
    
    email: {
        type: String,
        required: 'Email address is required',
        unique: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email address']
    },
    created: { type: Date, required: true, default: Date.now() },

    bills:[ {
        type: Schema.Types.ObjectId,
        ref: "Bill"
    }],
    budget: {
        type: Schema.Types.ObjectId,
        ref: "Budget"
    }
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);