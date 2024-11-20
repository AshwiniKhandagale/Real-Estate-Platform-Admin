const axios = require('axios');

// Admin function to get all properties
const getAllProperties = async (req, res) => {
  try {
    const response = await axios.get(`${process.env.PROPERTY_SERVICE_URL}/properties`, {
      headers: { Authorization: `Bearer ${req.headers.authorization.split(' ')[1]}` }
    });
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching properties', error: error.message });
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
