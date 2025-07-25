# 🚀 Portfolio Hub

A professional and responsive portfolio website built with **React** and **Tailwind CSS**, showcasing the work of three talented developers.

🔗 **Live Demo**: [https://your-deployment-link.com](https://your-deployment-link.com)

![React](https://img.shields.io/badge/React-18-blue?logo=react)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.x-teal?logo=tailwind-css)
![MIT License](https://img.shields.io/badge/License-MIT-green)

---

## 📚 Table of Contents

- [Features](#features)
- [Portfolio Data](#portfolio-data)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Customization](#customization)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

---

## ✨ Features

✅ **Homepage** with navigation to individual portfolio pages  
✅ **Individual Portfolio Pages** with:
- Personal details and bio
- Education background
- Projects & achievements (minimum 3 each)
- Extra-curricular activities
- Contact info (email, GitHub, LinkedIn)

✅ **React Router** for seamless page navigation  
✅ **Shared Components** (Navbar and Footer)  
✅ **Responsive Design** using Tailwind CSS  
✅ **Clean Folder Structure**  
✅ **Modern UI with smooth transitions**

---

## 👤 Portfolio Data

### 1. **Shreyash Mutha**
- **About**: Enthusiastic AI & Data Science student passionate about building real-world solutions with deep learning and GenAI
- **Education**: B.Tech in Artificial Intelligence & Data Science, VIT Pune (2021–2025)
- **Projects**: BreatheX, Drug Discovery using GNNs, AI Resume Evaluator
- **Extra-curriculars**: Podcast host at Bookwellcare, Figma Hackathon Finalist (IIT Indore)
- **Contact**: shreyash.mutha@gmail.com | [GitHub](https://github.com/shreyash-mutha) | [LinkedIn](https://linkedin.com/in/shreyash-mutha)

### 2. **Shrey Rai**
- **About**: Creative web developer with an eye for design and detail, loves building UI and interactive experiences
- **Education**: B.Tech in Computer Engineering, VIT Pune (2021–2025)
- **Projects**: Portfolio Builder App, Spotify Clone, VITFest Web Portal
- **Extra-curriculars**: Designer at Tech Club, Core team at TEDx VIT Pune
- **Contact**: shrey.rai@gmail.com | [GitHub](https://github.com/shrey-rai) | [LinkedIn](https://linkedin.com/in/shrey-rai)

### 3. **Omkar Shinde**
- **About**: Backend-focused engineer with interest in scalable APIs and cloud infrastructure
- **Education**: B.Tech in Information Technology, VIT Pune (2021–2025)
- **Projects**: Hospital API System, DevOps CI/CD Pipeline, Smart Attendance System
- **Extra-curriculars**: GDSC Contributor, Volunteer for college events
- **Contact**: omkar.shinde@gmail.com | [GitHub](https://github.com/omkar-shinde) | [LinkedIn](https://linkedin.com/in/omkar-shinde)

---

## 🗂️ Project Structure'
```
src/
├── components/
│   ├── Navbar.jsx          # Shared navigation component
│   └── Footer.jsx          # Shared footer component
├── pages/
│   ├── Home.jsx            # Homepage with developer overview
│   ├── ShreyashPortfolio.jsx
│   ├── ShreyRaiPortfolio.jsx
│   └── OmkarPortfolio.jsx
├── App.js                  # Main app with routing
├── index.js                # Entry point
└── index.css               # Tailwind CSS and custom styles
```
---

## 🛠️ Technologies Used

- **React 18** – Frontend library
- **React Router DOM** – Client-side routing
- **Tailwind CSS** – Utility-first CSS framework
- **@tailwindcss/typography** – Typography plugin
- **Inter Font** – Clean and modern Google Font

---

## ⚙️ Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/<your-username>/portfolio-hub.git
cd portfolio-hub

# Install dependencies
npm install

# Start the development server
npm start
````

Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

---

## 🖌️ Customization

### ➕ Add New Developer Page

1. Create a component in `src/pages/`
2. Follow the structure of existing portfolios
3. Add a route in `App.js`
4. Update the `Navbar.jsx` with a link to the new portfolio

### 🎨 Styling

* Customize `tailwind.config.js`
* Use Tailwind classes or add custom styles to `index.css`
* Import new fonts or adjust theme colors as needed

---

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

This will create a `build/` folder with optimized static files.

### Deploy To:

* **Netlify**: Drag & drop the `build` folder
* **Vercel**: Connect the GitHub repo and deploy
* **GitHub Pages**: Use `gh-pages` package
* **AWS S3 / Firebase**: Upload contents of `build/`

---

## 💡 Example Screenshots *(Optional)*

> Add screenshots inside `/screenshots` folder and reference them below

![Homepage](./screenshots/homepage.png)
![Portfolio Page](./screenshots/shreyash.png)

---

## 🤝 Contributing

1. Fork this repository
2. Create a branch: `git checkout -b feature/your-feature`
3. Make your changes
4. Commit: `git commit -m "Add feature"`
5. Push: `git push origin feature/your-feature`
6. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License**. See the `LICENSE` file for more information.

---

## 🙏 Acknowledgments

* [Unsplash](https://unsplash.com) – for images
* [Tailwind CSS](https://tailwindcss.com)
* [React](https://reactjs.org)
* All developers featured in the portfolio

---

Built with ❤️ by Shreyash, Shrey, and Omkar using React & Tailwind CSS.
