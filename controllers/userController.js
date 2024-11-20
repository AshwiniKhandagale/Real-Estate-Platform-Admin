const axios = require('axios');

// Admin function to get all users
const getAllUsers = async (req, res) => {
  try {
    const response = await axios.get(`${process.env.USER_SERVICE_URL}/users`, {
      headers: { Authorization: `Bearer ${req.headers.authorization.split(' ')[1]}` }
    });
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users', error: error.message });
  }
};

// Admin function to get user by ID
const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await axios.get(`${process.env.USER_SERVICE_URL}/users/${id}`, {
      headers: { Authorization: `Bearer ${req.headers.authorization.split(' ')[1]}` }
    });
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user', error: error.message });
  }
};

module.exports = { getAllUsers, getUserById };
