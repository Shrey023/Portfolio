# Portfolio Hub - Setup Guide

## 🚀 Quick Start

This guide will help you set up and run the Portfolio Hub project on any device.

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 14 or higher)
  - Download from: https://nodejs.org/
  - Verify installation: `node --version`
- **npm** (comes with Node.js)
  - Verify installation: `npm --version`

## 📦 Installation Steps

### 1. Extract the Project
```bash
# Extract the portfolio-website.zip file to your desired location
# Navigate to the extracted folder
cd portfolio-website
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start the Development Server
```bash
npm start
```

### 4. Open in Browser
The application will automatically open in your default browser at:
**http://localhost:3000**

If it doesn't open automatically, manually navigate to the URL.

## 🛠️ Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (not recommended)

## 📁 Project Structure

```
portfolio-website/
├── public/                 # Static files
├── src/
│   ├── components/         # Shared components
│   │   ├── Navbar.jsx      # Navigation component
│   │   └── Footer.jsx      # Footer component
│   ├── pages/              # Individual pages
│   │   ├── Home.jsx        # Homepage
│   │   ├── ShreyashPortfolio.jsx
│   │   ├── ShreyRaiPortfolio.jsx
│   │   └── OmkarPortfolio.jsx
│   ├── App.js              # Main app component
│   ├── index.js            # Entry point
│   └── index.css           # Global styles
├── tailwind.config.js      # Tailwind CSS configuration
├── postcss.config.js       # PostCSS configuration
├── package.json            # Dependencies and scripts
└── README.md               # Project documentation
```

## 🎨 Features

### Homepage
- Overview of all developers
- Navigation to individual portfolios
- Professional design with gradient backgrounds

### Individual Portfolio Pages
Each developer has a complete portfolio with:
- **About Me** section
- **Education** background
- **Projects & Achievements** (3+ items each)
- **Extra-curricular Activities**
- **Contact Information** (Email, GitHub, LinkedIn)

### Technical Features
- ✅ React Router for navigation
- ✅ Responsive design with Tailwind CSS
- ✅ Mobile-first approach
- ✅ Professional UI/UX
- ✅ Shared components (Navbar & Footer)

## 🔧 Troubleshooting

### Common Issues

#### 1. Port 3000 Already in Use
```bash
# Kill the process using port 3000
# On Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# On Mac/Linux:
lsof -ti:3000 | xargs kill -9
```

#### 2. Node Modules Issues
```bash
# Delete node_modules and reinstall
rm -rf node_modules
npm install
```

#### 3. Tailwind CSS Not Working
```bash
# Rebuild Tailwind CSS
npm run build
```

#### 4. Permission Errors
```bash
# On Mac/Linux, you might need:
sudo npm install
```

### Error Messages

#### "Module not found"
- Run `npm install` to install missing dependencies

#### "Port already in use"
- Use a different port: `PORT=3001 npm start`

#### "Tailwind CSS PostCSS plugin error"
- Ensure `postcss.config.js` exists and is properly configured
- Run `npm install` to ensure all dependencies are installed

## 🌐 Deployment

### Build for Production
```bash
npm run build
```

### Deploy Options
- **Netlify**: Drag and drop the `build` folder
- **Vercel**: Connect your GitHub repository
- **GitHub Pages**: Use `gh-pages` package
- **AWS S3**: Upload the `build` folder contents

## 📱 Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (responsive design)

## 🔄 Updates and Maintenance

### Adding New Portfolio Pages
1. Create a new component in `src/pages/`
2. Add the route in `src/App.js`
3. Update navigation in `src/components/Navbar.jsx`

### Updating Content
- Edit the respective portfolio component files
- Update project information, skills, and contact details
- Replace placeholder images with actual project screenshots

### Styling Changes
- Modify `tailwind.config.js` for theme customization
- Add custom styles in `src/index.css`
- Use Tailwind utility classes in components

## 📞 Support

If you encounter any issues:

1. Check the troubleshooting section above
2. Ensure all prerequisites are installed
3. Verify you're in the correct directory
4. Check the console for error messages

## 🎯 Portfolio Data

### Shreyash Mutha
- **Role**: AI & Data Science Student
- **Education**: B.Tech in AI & Data Science, VIT Pune
- **Projects**: BreatheX, Drug Discovery using GNNs, AI Resume Evaluator
- **Contact**: shreyash.mutha@gmail.com

### Shrey Rai
- **Role**: Web Developer & UI/UX Designer
- **Education**: B.Tech in Computer Engineering, VIT Pune
- **Projects**: Portfolio Builder App, Spotify Clone, VITFest Web Portal
- **Contact**: shrey.rai@gmail.com

### Omkar Shinde
- **Role**: Backend Engineer
- **Education**: B.Tech in Information Technology, VIT Pune
- **Projects**: Hospital API System, DevOps CI/CD Pipeline, Smart Attendance System
- **Contact**: omkar.shinde@gmail.com

---

**Happy Coding! 🚀**

Built with ❤️ using React and Tailwind CSS 