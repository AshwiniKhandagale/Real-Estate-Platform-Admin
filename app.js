const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const agentRoutes = require('./routes/agentRoutes');
const userRoutes = require('./routes/userRoutes');
const propertyRoutes = require('./routes/propertyRoutes');

dotenv.config();

const app = express();
app.use(express.json());

// Use routes for agent, user, and property services
app.use('/api/admin', agentRoutes);
app.use('/api/admin', userRoutes);
app.use('/api/admin', propertyRoutes);

// Connect to MongoDB (if needed for Admin microservice's DB)
mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Admin Service DB connected'))
  .catch((err) => console.log('Error connecting to DB', err));

// Start the server
app.listen(process.env.PORT, () => {
  console.log(`Admin Service running on port ${process.env.PORT}`);
});
