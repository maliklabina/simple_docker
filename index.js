const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;



mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

.then(() => console.log('MongoDB connected!'))
.catch((err) => console.error('Connection error:', err));


app.get('/', (req, res) => {
    res.send('Hello, Dockerized Node.js app!');
    }
);


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
}
);

module.exports = app;