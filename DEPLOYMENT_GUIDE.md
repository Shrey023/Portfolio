# 🚀 Deployment Guide - Vercel

## Quick Deploy Steps

### 1. **Prepare Your Code**
```bash
# Make sure all changes are committed
git add .
git commit -m "Ready for deployment"
git push origin main
```

### 2. **Deploy to Vercel**

#### **Option A: Via Vercel Dashboard (Recommended)**
1. Go to [vercel.com](https://vercel.com)
2. Sign up/Login with GitHub
3. Click "New Project"
4. Import your repository
5. Configure:
   - **Framework Preset:** Create React App
   - **Root Directory:** `./`
   - **Build Command:** `npm run build`
   - **Output Directory:** `build`
6. Click "Deploy"

#### **Option B: Via Vercel CLI**
```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel
```

### 3. **Custom Domain (Optional)**
- In Vercel dashboard, go to your project
- Click "Settings" → "Domains"
- Add your custom domain

## Configuration Files

### `vercel.json` (Already created)
This file handles routing for React Router and static assets.

### Environment Variables
If you add any environment variables later:
1. Go to Vercel Dashboard
2. Project Settings → Environment Variables
3. Add your variables

## Post-Deployment

### ✅ **What to Check:**
- [ ] All pages load correctly
- [ ] 3D animations work
- [ ] Dark/Light theme switching
- [ ] Contact links work
- [ ] Images load properly
- [ ] Responsive design on mobile

### 🔧 **Troubleshooting:**
- **Build fails:** Check console for errors
- **Images not loading:** Ensure paths are correct
- **Routing issues:** Check `vercel.json` configuration
- **3D not working:** Check browser console for Three.js errors

## Performance Tips

### **Optimize Images:**
- Use WebP format where possible
- Compress images before uploading
- Consider using a CDN for large images

### **Code Splitting:**
- React Router already handles this
- Consider lazy loading for 3D components

## Monitoring

### **Vercel Analytics:**
- Enable in project settings
- Monitor performance and errors
- Track user behavior

### **Custom Analytics:**
- Add Google Analytics if needed
- Monitor 3D performance metrics

## Updates

### **Automatic Deployments:**
- Every push to `main` branch triggers deployment
- Preview deployments for pull requests

### **Manual Deployments:**
```bash
# Redeploy manually
vercel --prod
```

## Support

- **Vercel Docs:** [vercel.com/docs](https://vercel.com/docs)
- **React Deployment:** [create-react-app.dev/docs/deployment](https://create-react-app.dev/docs/deployment)
- **Three.js Issues:** Check browser console for WebGL errors

---

**Your portfolio will be live at:** `https://your-project-name.vercel.app` 