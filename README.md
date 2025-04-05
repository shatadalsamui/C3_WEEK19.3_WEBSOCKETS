# Real-Time WebSocket Demo

A hands-on implementation showcasing WebSocket communication between a React frontend and Node.js backend. Perfect for understanding real-time web fundamentals.

## What's Inside

### Backend Setup
- **Express** HTTP server with **WebSocket** integration
- Handles multiple client connections
- Broadcasts messages to all connected clients
- Clean connection management

### Frontend Implementation
- Connects automatically to WebSocket server
- Sends/receives messages in real-time
- Built with **React** and **Vite** for fast development
- Uses native browser WebSocket API

## Project Structure
```
.
├── backend
│   ├── src/index.ts       # WebSocket server (port 8080)
│   ├── package.json       # express, ws, typescript
│   └── tsconfig.json
└── frontend
    ├── src/App.tsx        # React WebSocket client
    ├── src/main.tsx       # App entry point
    └── package.json       # react, vite, typescript
```

## Running the Project

1. **Start the backend**:
```bash
cd backend
npm install
npm run dev
# Server starts on http://localhost:8080
```

2. **Start the frontend** (in another terminal):
```bash
cd frontend
npm install
npm run dev
# Access at http://localhost:5173
```

3. **Test the connection**:
- Open browser console to see connection messages
- The frontend automatically sends a test message
- Backend echoes messages to all clients

