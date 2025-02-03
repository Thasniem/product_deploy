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

// Connect to MongoDB
mongoose.connect('mongodb+srv://Thasniem:thfjd150@mycluster.0ivtg.mongodb.net/?retryWrites=true&w=majority&appName=MyCluster
')
    .then(()=> console.log('database connected..'))
    .catch((err) => console.log(err))

app.get('/', (req, res)=>{
     res.send('server reacted...')
 })

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
