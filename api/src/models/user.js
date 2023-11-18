const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: { type: String, required: true }, 
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true},
    year: { type: Number, required: true },
    major: { type: String, required: true },
    //interests: [String],
    //social: String
});

userSchema.set('toJSON', {
    transform: (doc, ret, opt) => {
        delete ret['password'];
        delete ret['__v'];
        return ret;
    }
});


module.exports = mongoose.model('User', userSchema);