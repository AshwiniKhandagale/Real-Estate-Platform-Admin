const axios = require('axios');

// Admin function to get all agents
const getAllAgents = async (req, res) => {
  try {
    const response = await axios.get(`${process.env.AGENT_SERVICE_URL}/agents`, {
      headers: { Authorization: `Bearer ${req.headers.authorization.split(' ')[1]}` }
    });
    console.log(response);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching agents', error: error.message });
  }
};

// Admin function to get agent by ID
const getAgentById = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await axios.get(`${process.env.AGENT_SERVICE_URL}/agents/${id}`, {
      headers: { Authorization: `Bearer ${req.headers.authorization.split(' ')[1]}` }
    });
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching agent', error: error.message });
  }
};

module.exports = { getAllAgents, getAgentById };
