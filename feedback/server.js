const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/retrofit', { useNewUrlParser: true, useUnifiedTopology: true });

// Define a schema
const feedbackSchema = new mongoose.Schema({
    name: String,
    email: String,
    feedback: String
});

// Define a model
const Feedback = mongoose.model('Feedback', feedbackSchema);

app.use(cors());
app.use(bodyParser.json());

app.post('/feedback', async (req, res) => {
    const feedbackData = req.body;
    console.log('Received feedback:', feedbackData);

    try {
        // Save feedback to MongoDB
        const feedback = new Feedback(feedbackData);
        await feedback.save(); // Use async/await here
        console.log('Feedback successfully saved to MongoDB');
        res.status(200).send('Feedback received');
    } catch (err) {
        console.error('Error saving to database', err);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:3000`);
});
