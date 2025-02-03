const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 5000;  // Hardcoded port

// Import routes
const bookRoutes = require('./routes/bookRoutes');
const userRoutes = require('./routes/userRoutes');
const orderRoutes = require('./routes/orderRoutes');

// Middleware
app.use(express.json());  // To parse JSON bodies

// Routes
app.use('/api', bookRoutes);
app.use('/api', userRoutes);
app.use('/api', orderRoutes);

// MongoDB connection URI (corrected)
const mongoURI = 'mongodb+srv://Thasniem:thfjd150@mycluster.0ivtg.mongodb.net/?retryWrites=true&w=majority&appName=MyCluster';

mongoose.connect(mongoURI)
  .then(() => console.log('Database connected...'))
  .catch((err) => console.log('MongoDB connection error:', err));

app.get('/', (req, res) => {
  res.send('Server is responding...');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
