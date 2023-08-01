import React, { useState } from "react";
import "../App.css";

/**
 * ChatInput component displays an input field and a button for sending chat messages.
 * It also provides an option to mention users from the user_list using "@" symbol.
 * @params onSendMessage: A callback function to handle sending a new message.
 * @params user_list: An array of user names to provide suggestions for mentions.
 */
const ChatInput = ({ onSendMessage, user_list }) => {
  const [inputText, setInputText] = useState(""); // State to hold the input text
  const [mentionList, setMentionList] = useState([]); // State to hold the filtered mention list
  const [showMentionList, setShowMentionList] = useState(false); // State to control the visibility of the mention list

  // Function to handle the send button click
  const handleSendClick = () => {
    if (inputText.trim() !== "") {
      // Call the onSendMessage callback with the input text
      onSendMessage(inputText);
      // Clear the input text after sending the message
      setInputText("");
    }
  };

  // Function to handle input field change
  const handleInputChange = (e) => {
    const text = e.target.value;
    setInputText(text);

    // Check if the input text contains "@" to find mentions
    if (text.includes("@")) {
      const mentionedText = text.split("@")[1].toLowerCase();
      // Filter user_list to find users that match the mentioned text
      const filteredUsers = user_list.filter((user) =>
        user.toLowerCase().startsWith(mentionedText)
      );
      // Update the mention list and show the dropdown menu with options to select mentions
      setMentionList(filteredUsers);
      setShowMentionList(true);
    } else {
      // Hide the mention list if "@" is not present in the input text
      setShowMentionList(false);
    }
  };

  // Function to handle a mention click
  const handleMentionClick = (mentionedUser) => {
    setInputText((prevInputText) => {
      const mentionStartIndex = prevInputText.lastIndexOf("@");
      const beforeMention = prevInputText.slice(0, mentionStartIndex);
      return `${beforeMention}@${mentionedUser} `;
    });

    setShowMentionList(false);
  };

  return (
    <div className="chat-input-container">
      {/* Render the mention list if showMentionList is true */}
      {showMentionList && (
        <div className="mention-list">
          {mentionList.map((user, index) => (
            // Render each user as a suggestion with "@" symbol and a click handler
            <div key={index} onClick={() => handleMentionClick(user)}>
              @{user}
            </div>
          ))}
        </div>
      )}
      {/* Render the input field */}
      <input
        type="text"
        placeholder="Type here"
        value={inputText}
        onChange={handleInputChange}
        autoFocus
      />
      {/* Render the send button */}
      <button onClick={handleSendClick}>Send</button>
    </div>
  );
};

export default ChatInput;
