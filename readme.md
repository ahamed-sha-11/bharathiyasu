# Bharathiyasu

A frontend-only React web application with static JSON data.

## Project Structure

```
.
├── frontend/              # React frontend application
│   ├── src/
│   │   ├── components/    # React components (Hero, NavBar, Publications, Career)
│   │   ├── data/          # JSON data files (careers.json, publications.json)
│   │   ├── App.jsx        # Main application component
│   │   ├── main.jsx       # Entry point
│   │   └── App.css        # Application styles
│   ├── public/            # Static assets
│   │   ├── YB-HERO.jpg    # Hero image
│   │   ├── YB-NEWS.jpg    # News image
│   │   ├── YB.svg         # Logo/Crest
│   │   └── docs/
│   │       └── resume.pdf # Resume document
│   ├── package.json
│   └── vite.config.js
├── start_server.sh        # Frontend startup script
├── start_servers.sh       # Frontend startup script (alias)
└── readme.md
```

## Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)

## Installation

1. Install dependencies:

```bash
cd frontend
npm install
```

## Usage

Start the application using the provided scripts:

```bash
# Start frontend development server
./start_server.sh -d

# Or without the script
cd frontend
npm run dev
```

The application will be available at `http://localhost:5173` (or the port configured in your Vite setup)

## Development

To run the application in development mode:

```bash
cd frontend
npm run dev
```

## Building

To build the application for production:

```bash
cd frontend
npm run build
```

## Scripts

Available npm scripts in the frontend folder:

- `npm install`: Install dependencies
- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run preview`: Preview production build

## Data Sources

The application uses static JSON data files located in `src/data/`:

- **careers.json**: Professional career history
- **publications.json**: Academic publication records

All data is imported directly into React components as ES modules.

## Features

- ✅ Frontend-only React application
- ✅ No backend API calls
- ✅ Static JSON data sources
- ✅ Responsive design
- ✅ Professional portfolio layout

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.