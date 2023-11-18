const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const matchSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: "User" },
    percentage: { type: Number, default: 0 }
})

const userSchema = new Schema({
    name: { type: String, required: true }, 
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true},
    year: { type: Number, required: true },
    major: { type: String, required: true },
    interests: { type: [String], required: true }, 
    classes: { type: [String], required: true },
    matches: { type: [matchSchema], required: false },
});

userSchema.set('toJSON', {
    transform: (doc, ret, opt) => {
        delete ret['password'];
        delete ret['__v'];
        return ret;
    }
});


module.exports = mongoose.model('User', userSchema);