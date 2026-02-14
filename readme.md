# Dr. Yasu Bharathi - Portfolio Website

A modern, frontend-only React portfolio website featuring a blog section with search and filtering capabilities, career timeline, and academic publications. Built with Vite and styled with a newspaper-inspired aesthetic.

## 🌟 Features

- ⚛️ **React 19.0.0** with React Router DOM for client-side navigation
- 📱 **Responsive Design** - Mobile-first, works seamlessly on all devices
- 📰 **Newspaper Aesthetic** - Clean, professional design with grayscale imagery
- 🔍 **Blog Search & Filtering** - Full-text search with tag-based filtering and "Show More" functionality
- 📚 **Blog Detail Pages** - Individual pages for each blog post with routing
- 👨‍💼 **Career Timeline** - Professional positions with descriptions and highlights
- 🎓 **Publications** - Academic publication records with complete metadata
- 📄 **Static Data** - No backend required - all data from JSON files
- ⚡ **Vite Build System** - Fast development and optimized production builds

## 📁 Project Structure

```
bharathiyasu/
├── frontend/                          # React application
│   ├── src/
│   │   ├── components/
│   │   │   ├── hero/
│   │   │   │   ├── Hero.jsx          # Profile hero section
│   │   │   │   └── Hero.css
│   │   │   ├── navbar/
│   │   │   │   ├── NavBar.jsx        # Navigation bar
│   │   │   │   └── NavBar.css
│   │   │   ├── blog/
│   │   │   │   ├── Blog.jsx          # Blog listing with search/filter
│   │   │   │   ├── BlogDetail.jsx    # Individual blog post page
│   │   │   │   └── blog.css
│   │   │   ├── career/
│   │   │   │   ├── Career.jsx        # Career timeline section
│   │   │   │   └── career.css
│   │   │   ├── publications/
│   │   │   │   ├── publications.jsx  # Publications section
│   │   │   │   └── publications.css
│   │   │   └── home/
│   │   │       └── Home.jsx          # Home page layout
│   │   ├── data/
│   │   │   ├── blogs.json            # Blog posts (8 entries)
│   │   │   ├── careers.json          # Career history (4 positions)
│   │   │   └── publications.json     # Academic publications (7 entries)
│   │   ├── App.jsx                   # Main app component with routing
│   │   ├── App.css                   # Global styles
│   │   ├── main.jsx                  # Vite entry point
│   │   └── index.js
│   ├── public/
│   │   ├── index.html                # HTML template
│   │   ├── YB.svg                    # Logo
│   │   ├── YB-HERO.jpg               # Hero image
│   │   ├── YB-NEWS.jpg               # News image
│   │   └── docs/
│   │       └── resume.pdf            # Resume document
│   ├── package.json
│   ├── vite.config.js
│   └── README.md
├── start_server.sh                   # Startup script for development/production
└── readme.md                         # This file
```

## 🚀 Quick Start

### Prerequisites

- **Node.js** v18 or higher
- **npm** v9 or higher

### Installation & Running

#### Using the startup script (recommended):

```bash
# Development mode
./start_server.sh -d

# Production build + preview
./start_server.sh
```

#### Manual setup:

```bash
cd frontend
npm install

# Development server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

### Access the Site

- **Development**: http://localhost:5173
- **Production Preview**: http://localhost:4173

## 📝 Data Structure

### Blog Posts (`blogs.json`)

Each blog entry contains:
- `id`: Unique identifier
- `title`: Article title
- `excerpt`: Short summary
- `content`: Full article content
- `author`: Author name (Dr. Yasu Bharathi)
- `publication_date`: ISO date string
- `category`: Article category
- `tags`: Array of searchable tags
- `image`: External image URL (from picsum.photos)
- `createdAt`/`updatedAt`: Timestamps

**Blog Features:**
- Full-text search across title, excerpt, and content
- Filter by tags with toggle buttons
- "Show More/Less" for expanded tag display
- Responsive 3-column grid layout
- Individual detail pages with routing

### Career History (`careers.json`)

Each career entry includes:
- `id`: Entry identifier
- `position`: Job title
- `firm`: Company/Institution name
- `start_date` / `end_date`: Employment period
- `headline`: Brief position summary
- `description`: Detailed description
- `highlights`: Array of key achievements

**4 Positions:**
1. Vel Tech R&D Institute (July 2023 – Present)
2. Geetha Jeevan Arts & Science College (Jan 2023 – Jun 2023)
3. V.O. Chidambaram College (Feb 2022 – Dec 2022)
4. V.O. Chidambaram College (Jul 2018 – Jan 2022)

### Publications (`publications.json`)

Each publication includes:
- `id`: Publication identifier
- `title`: Research paper title
- `authors`: List of authors
- `year`: Publication year
- `conference`: Conference/journal name
- `url`: Link to publication
- `category`: Research area

**7 Academic Publications**

## 🎨 Styling

The site features a newspaper-inspired design:

- **Color Scheme**: Black and white with high contrast
- **Typography**: Professional, readable fonts
- **Images**: Grayscale with contrast enhancement for vintage aesthetic
- **Layout**: Grid-based responsive design
- **Hover Effects**: Subtle image contrast changes

## 🔧 Available npm Scripts

```bash
npm run dev      # Start development server (Vite)
npm run build    # Build for production
npm run preview  # Preview production build locally
```

## 🌐 Routing

The application uses React Router DOM for client-side navigation:

- `/` - Home page
- `/blog` - Blog listing with search and filters
- `/blog/:id` - Individual blog post detail page
- `/career` - Career timeline
- `/publications` - Academic publications

## 📱 Responsive Design

- **Desktop**: 3-column blog grid, full sidebar navigation
- **Tablet**: 2-column blog grid, optimized spacing
- **Mobile**: Single-column layout, hamburger menu navigation

## 🔍 Search & Filtering

**Blog Search:**
- Real-time full-text search
- Searches across title, excerpt, and content
- Results count display
- Clear button for quick reset

**Tag Filtering:**
- Click tags to filter articles
- Toggle selected tags to deselect
- "Show More/Less" for extensive tag lists
- Filter by multiple criteria combination

## 🛠 Built With

- [React 19.0.0](https://react.dev/) - UI library
- [React Router DOM 6.23.0](https://reactrouter.com/) - Client-side routing
- [Vite 6.3.5](https://vitejs.dev/) - Build tool and dev server
- [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS) - Styling and animations
- [JSON](https://www.json.org/) - Static data storage

## 📄 Content Sources

All content is meaningful and derived from:
- **Bio & Profile**: Dr. Yasu Bharathi's professional background
- **Career**: Extracted from resume.pdf
- **Publications**: Academic research records
- **Blog**: Original articles on education and literature

## 🚀 Performance

- ⚡ Vite's instant development server
- 🎯 Optimized production builds
- 📦 JSON imports at compile-time
- 🖼️ External images with fallback handling
- 🎨 CSS-based image filters (no image processing required)

## 📝 License

© 2026 Dr. Yasu Bharathi. All rights reserved.

## 📧 Contact

For inquiries, please refer to the contact information in the portfolio website.