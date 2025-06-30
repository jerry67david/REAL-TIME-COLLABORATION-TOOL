# REAL-TIME-COLLABORATION-TOOL

A simplified version of Google Docs or Replit that allows multiple users to collaborate on the same document or code editor in real-time using WebSockets.

Technologies Used: 

Frontend - 	React.js
Backend - 	Node.js + Express
Real-Time - 	WebSockets (Socket.io)
Styling - 	Tailwind CSS (suggested, optional)

How it Works is:

1. Users open the app and are connected to a shared room via WebSocket.

2. Any text change (in the text area) is emitted to the server.

3. The server broadcasts the update to other users in the same room.

4. Each client updates its view accordingly → real-time sync!
