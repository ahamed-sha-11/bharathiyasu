# Bharathiyasu

A full-stack web application built with React and Node.js/Express.

## Project Structure

```
.
├── backend/           # Node.js/Express backend
│   ├── configs/      # Configuration files
│   ├── controllers/  # API controllers
│   ├── service/      # Business logic services
│   ├── public/       # Static files
│   ├── index.js      # Entry point
│   └── router.js     # API routing
├── frontend/         # React frontend
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── App.jsx      # Main application component
│   │   ├── main.jsx     # Entry point
│   │   └── App.css      # Application styles
├── start_server.sh   # Server startup script
└── start_servers.sh  # Multi-server startup script
```

## Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)

## Installation

1. Install dependencies:

```bash
# Install root dependencies
npm install

# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install
```

## Usage

Start the application using the provided scripts:

```bash
# Start both servers
./start_servers.sh

# Or start individual servers
./start_server.sh frontend  # Start only frontend
./start_server.sh backend   # Start only backend
```

The application will be available at `http://localhost:3000`

## Development

To run the application in development mode:

```bash
# Start frontend in development mode
cd frontend
npm start

# Start backend in development mode
cd backend
npm run dev
```

## Scripts

Available npm scripts:

- `npm install`: Install dependencies
- `npm start`: Start the application
- `npm run dev`: Start development server

Additional scripts:
- `./start_server.sh`: Start individual server (frontend or backend)
- `./start_servers.sh`: Start both frontend and backend servers

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.