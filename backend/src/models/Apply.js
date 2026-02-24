import mongoose from 'mongoose';

const applySchema = new mongoose.Schema({
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String },
    address: { type: String },
    phone: { type: Number },
    course: { type: String },
},
    { timestamps: true }
);

const Apply = mongoose.model('Apply', applySchema);

export default Apply