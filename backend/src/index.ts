import express from 'express'; // Import Express framework for creating HTTP server
import { WebSocketServer, WebSocket } from 'ws'; // Import WebSocketServer from 'ws' library for WebSocket functionality

const app = express(); // Create an Express application instance
const httpServer = app.listen(8080, () => {
    console.log('Server running on http://localhost:8080'); // Start HTTP server on port 8080
});

const wss = new WebSocketServer({ server: httpServer }); // Create WebSocket server attached to the HTTP server

wss.on('connection', function connection(ws) { // Handle new WebSocket connections
    ws.on('error', console.error); // Log any WebSocket errors to console

    ws.on('message', function message(data) { // Handle incoming messages from clients
        const messageText = data.toString(); // Convert buffer to string
        wss.clients.forEach(function each(client) { // Broadcast received message to all connected clients
            if (client.readyState === WebSocket.OPEN) { // Only send to clients with open connections
                client.send(messageText); // Send string message
            }
        });
    });
    ws.send('Hello! Message From Server!!'); // Send welcome message to newly connected client
})