# Netlify Deployment Guide

## Step 1: Push to GitHub

Make sure your code is pushed to your GitHub repository:

```bash
git add .
git commit -m "Add Firebase config and Netlify setup"
git push origin main
```

## Step 2: Connect Netlify to GitHub

1. Go to [Netlify](https://netlify.com)
2. Click **"Add new site"** → **"Import an existing project"**
3. Choose **GitHub** and authorize
4. Select your **kaashvisolar** repository
5. Click **Deploy site**

## Step 3: Add Environment Variables

Netlify will now show your site deploying. Once it's ready:

1. Go to your Netlify site dashboard
2. Navigate to **Site Settings** → **Build & Deploy** → **Environment**
3. Click **Edit variables**
4. Add your Firebase environment variables from `.env.local`:

```
VITE_FIREBASE_API_KEY = AIzaSyCTRmHBuNhCHrYNMWuc2wFW8p00dd5mtxs
VITE_FIREBASE_AUTH_DOMAIN = solar-pannel-d7672.firebaseapp.com
VITE_FIREBASE_PROJECT_ID = solar-pannel-d7672
VITE_FIREBASE_STORAGE_BUCKET = solar-pannel-d7672.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID = 461184790090
VITE_FIREBASE_APP_ID = 1:461184790090:web:abde8e5fa5ef923f1440b3
VITE_FIREBASE_MEASUREMENT_ID = G-QJV8R1MRYC
```

5. Click **Save**

## Step 4: Redeploy

1. Go to **Deployments**
2. Click the three dots (...) on the latest deployment
3. Select **Redeploy site**

Wait for the build to complete.

## Step 5: Configure Netlify Build Settings (if needed)

If the automatic detection doesn't work:

1. Go to **Site Settings** → **Build & Deploy** → **Build settings**
2. Set:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
3. Click **Save**

## Step 6: Test Your Site

Once redeployed:

✅ `https://kaashvisolar.netlify.app/` - Homepage should work  
✅ `https://kaashvisolar.netlify.app/admin/login` - Login page should work  
✅ All nested routes should work  

## Troubleshooting

### Still getting 404?

1. Verify `public/_redirects` file exists in your repository
2. Check Netlify **Deployments** log for any build errors
3. Clear browser cache or try incognito mode
4. Wait 5 minutes for DNS propagation

### Login not working?

1. Check that Firebase environment variables are set in Netlify
2. Verify credentials in `.env.local` match Firebase console
3. Check browser console (F12) for error messages

### Build failing?

1. Check build log in Netlify Deployments tab
2. Run `npm run build` locally to test
3. Ensure all dependencies are in `package.json`
