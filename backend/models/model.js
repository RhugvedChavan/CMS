import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true
    },
    courseName: {
        type: String,
        required: true,
    },
    rollNo: {
        type: Number,
        required: true
    },

}, {timestamps: true})

export const Student = mongoose.model('Student', studentSchema)