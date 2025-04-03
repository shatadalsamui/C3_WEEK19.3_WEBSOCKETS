"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express")); // Import Express framework for creating HTTP server
const ws_1 = require("ws"); // Import WebSocketServer from 'ws' library for WebSocket functionality
const app = (0, express_1.default)(); // Create an Express application instance
const httpServer = app.listen(8080, () => {
    console.log('Server running on http://localhost:8080'); // Start HTTP server on port 8080
});
const wss = new ws_1.WebSocketServer({ server: httpServer }); // Create WebSocket server attached to the HTTP server
wss.on('connection', function connection(ws) {
    ws.on('error', console.error); // Log any WebSocket errors to console
    ws.on('message', function message(data) {
        const messageText = data.toString(); // Convert buffer to string
        wss.clients.forEach(function each(client) {
            if (client.readyState === ws_1.WebSocket.OPEN) { // Only send to clients with open connections
                client.send(messageText); // Send string message
            }
        });
    });
    ws.send('Hello! Message From Server!!'); // Send welcome message to newly connected client
});
