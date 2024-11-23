const axios = require('axios');

// Admin function to get all properties
const getAllProperties = async (req, res) => {
    try {
      // Make the request to the Property Service
      const response = await axios.get(`${process.env.PROPERTY_SERVICE_URL}properties`, {
        headers: { Authorization: `Bearer ${req.headers.authorization.split(' ')[1]}` }
      });
        console.log(response.data);
      // Send the response status and data back to the client
      res.status(200).json(response.data);
    } catch (error) {
      console.error('Error fetching properties:', error);
  
      // Handle Axios errors
      const statusCode = error.response ? error.response.status : 500;
      const errorMessage = error.response ? error.response.data : error.message;
  
      res.status(statusCode).json({ message: 'Error fetching properties', error: errorMessage });
    }
  };
  

// Admin function to get property by ID
const getPropertyById = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await axios.get(`${process.env.PROPERTY_SERVICE_URL}/properties/${id}`, {
      headers: { Authorization: `Bearer ${req.headers.authorization.split(' ')[1]}` }
    });
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching property', error: error.message });
  }
};

module.exports = { getAllProperties, getPropertyById };
