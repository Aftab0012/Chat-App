import React, { useState, useEffect } from "react";
import ChatInput from "./Components/ChatBoxInput";
import ChatMessageThread from "./Components/ChatMessageThread";
import "./App.css";

// List of user names
const user_list = ["Alan", "Bob", "Carol", "Dean", "Elin"];

const App = () => {
  // State to hold the chat messages
  const [messages, setMessages] = useState([]);

  // Function to handle sending a new message
  // @param text: The text of the message to be sent
  const handleSendMessage = (text) => {
    // Generate a random username from the user_list
    const randomUsername =
      user_list[Math.floor(Math.random() * user_list.length)];

    // Get the current time to include in the message
    const currentTime = new Date();
    const hours = currentTime.getHours().toString().padStart(2, "0");
    const minutes = currentTime.getMinutes().toString().padStart(2, "0");
    const timeString = `${hours}:${minutes}`;

    // Create a new message with the provided text, username, likes count (0 initially), and timestamp
    const newMessage = [randomUsername, text, 0, timeString];

    // Update the messages state with the new message
    setMessages([...messages, newMessage]);
  };

  // Function to handle liking a message
  // @param index: The index of the message in the messages array to be liked
  const handleLike = (index) => {
    // Create a copy of the messages array
    const updatedMessages = [...messages];
    // Increment the likes count of the specified message
    updatedMessages[index][2] += 1;
    // Update the messages state with the updated array
    setMessages(updatedMessages);
  };

  return (
    <div className="container">
      {/* Render the chat message thread component with the messages and the like handler */}
      <ChatMessageThread messages={messages} onLike={handleLike} />
      {/* Render the chat input component with the send message handler and the user_list */}
      <ChatInput onSendMessage={handleSendMessage} user_list={user_list} />
    </div>
  );
};

export default App;
