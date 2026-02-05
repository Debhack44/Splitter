# Card Filter Web App

Standalone web app for the MIKU Card Splitter Bot.

## Deploy Anywhere

### Option 1: Vercel (Recommended)
```bash
npm install -g vercel
cd card-filter-webapp
vercel
```

### Option 2: Netlify
```bash
npm install -g netlify-cli
cd card-filter-webapp
netlify deploy --prod
```

### Option 3: Render.com
1. Go to https://render.com
2. Create new "Web Service"
3. Connect your GitHub repo or upload files
4. Build command: `npm install`
5. Start command: `npm start`

### Option 4: Railway.app
1. Go to https://railway.app
2. Click "New Project"
3. Upload this folder
4. It auto-detects and deploys

### Option 5: Fly.io
```bash
fly launch
fly deploy
```

## Environment Variables

Set these in your hosting platform:

- `PORT` - Port number (default: 8080)
- `BOT_API_URL` - Your bot server URL (e.g., http://your-server:3000)

## Files

- `index.html` - Web app interface
- `server.js` - Express server
- `package.json` - Dependencies

## After Deployment

1. Get your web app URL (e.g., https://your-app.vercel.app)
2. Update bot code to use your URL instead of tunnel
3. Replace `WEB_APP_URL` in bot.js with your deployed URL

Example in bot.js:
```javascript
const WEB_APP_URL = 'https://your-app.vercel.app';
```

## Local Testing

```bash
npm install
npm start
```

Visit: http://localhost:8080/filter/123456789
