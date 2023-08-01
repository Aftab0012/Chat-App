#### Note:- App is under development, in future adding socket.io to make it real-time chat app

# Chat App

This is a simple chat application built using React. The app allows users to send and receive messages in real-time. Users can also see a list of online users and mention other users by typing "@" followed by their name.

## Features

- Mention users: Users can mention other users by typing "@" followed by their name. The app will suggest a list of matching users as the user types.
- Like messages: Users can like messages sent by other users.

## Technologies Used

- React: Frontend library for building user interfaces.
- HTML/CSS: For structuring and styling the user interface.

## Getting Started

To run the app locally, follow these steps:

1. Clone the repository: git clone <repository_url>
2. Navigate to the project directory: cd chat-app
3. Install dependencies: npm install
4. Start the development server: npm start
5. Open your browser and go to http://localhost:3000 to view the app.

## Usage

1. Enter your name in the input field at the bottom of the chat window.
2. Type a message in the input field and click the "Send" button or press the Enter key to send a message.
3. To mention a user, type "@" followed by their name. The app will show a dropdown with matching user names for you to select from.
4. To like a message, click the "Like" button beside the message.

## Folder Structure

public: Contains the static files and the main HTML file.
src: Contains the source code of the React app.
Components: Contains the reusable components used in the app.
App.js: Main component that renders the chat app.
index.js: Entry point of the React app.
server.js: Backend server code using Express.js and Socket.IO.

## Contributing

Feel free to contribute to this project by creating issues or pull requests. Your feedback and suggestions are welcome!
