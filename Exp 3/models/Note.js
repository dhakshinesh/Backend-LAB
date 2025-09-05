//Model for notes : title, content, date
import mongoose from 'mongoose';

const noteSchema = new mongoose.Schema({
    title: String,
    content: String,
    date: { type: Date, default: Date.now }
});

export const Note = mongoose.model('Note', noteSchema);