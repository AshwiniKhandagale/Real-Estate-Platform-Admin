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


// Start the server
app.listen(process.env.PORT, () => {
  console.log(`Admin Service running on port ${process.env.PORT}`);
});
