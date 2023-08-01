import React from "react";
import ChatMessage from "./ChatMessage";
import "../App.css";

/**
 * ChatMessageThread component displays a list of chat messages.
 * @params messages: An array of chat message objects.
 * @params onLike: A callback function to handle the like action on a message.
 */
const ChatMessageThread = ({ messages, onLike }) => {
  // Check if messages is not an array
  if (!Array.isArray(messages)) {
    return null; // Return null when messages is not an array
  }

  return (
    <div className="chat-message-thread">
      {/* Loop through each message and render ChatMessage component */}
      {messages.map((message, index) => (
        <ChatMessage
          key={index} // Use the index as the key, assuming no unique ID for messages
          message={message} // Pass the message object to ChatMessage component
          onLike={() => onLike(index)} // Pass a callback function to handle the like action
        />
      ))}
    </div>
  );
};

export default ChatMessageThread;
