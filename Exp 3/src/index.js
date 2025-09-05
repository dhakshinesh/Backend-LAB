import mongoose from 'mongoose';
import express from 'express';
mongoose.connect('mongodb://localhost:27017/mydatabase')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));

const app = express();
app.use(express.json());
console.log("Hello World");
import {Note} from '../models/Note.js';

//C : Create a new note
app.get('/Sendnote', async (req, res) => {
    try {
        const note = new Note({
            title: "Sample Note Title",
            content: "Sample Note Content"
        });
        await note.save();
        res.status(201).send(note);
    } catch (err) {
        res.status(400).send({ error: err.message });
    }
});

//R : Get all notes
app.get('/Getnotes', async (req, res) => {
    try {
        const notes = await Note.find();
        console.log(notes);
        res.send(notes);
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
});

//U : Update a note by ID
app.get('/Delete/:id', async (req, res) => {
    try {
        const note = await Note.findByIdAndDelete(req.params.id);
        if (!note) {
            return res.status(404).send({ error: 'Note not found' });
        }
        res.send({ message: 'Note deleted successfully' });
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
});

//D : Delete a note by ID
app.get('/Update/:id', async (req, res) => {
    try {
        const note = await Note.findByIdAndUpdate(req.params.id, { title: "Updated Title", content: "Updated Content" }, { new: true });
        if (!note) {
            return res.status(404).send({ error: 'Note not found' });
        }
        res.send(note);
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});