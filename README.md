# Real-Estate-Platform-Admin

# Agent Service

The Agent Service is part of a Real Estate Platform, providing CRUD functionality for managing agents. It handles registration, fetching agent details, updating, and deleting agents. It communicates with the **User Service** and **Admin Service** via JWT-based authentication.

### Features:
- **Register Agent**: Allows registering a new agent with required details.
- **Get All Agents**: Fetch all registered agents.
- **Get Agent by ID**: Fetch details of a specific agent.
- **Update Agent**: Allows updating agent information.
- **Delete Agent**: Allows deleting an agent from the system.

### Communication:
- Uses **JWT token** for authentication and authorization.
- Communicates with **User Service** for user data.
- Admin Service communicates with this service to manage agent data.

### API Endpoints:
- `POST /api/agents/register`: Register a new agent
- `GET /api/agents`: Get a list of all agents
- `GET /api/agents/:id`: Get details of a specific agent by ID
- `PUT /api/agents/:id`: Update an agent
- `DELETE /api/agents/:id`: Delete an agent by ID

