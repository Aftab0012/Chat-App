import React from "react";
import IconButton from "@mui/material/IconButton";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import "../App.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

/**
 * ChatMessage component displays an individual chat message with the user's profile, message text, and like button.
 * @params message: An array containing the details of the message [username, text, likes, timeString].
 * @params onLike: A callback function to handle the like action on the message.
 */
const ChatMessage = ({ message, onLike }) => {
  // Destructure the message array to extract its elements
  const [username, text, likes, timeString] = message;

  return (
    <div className="chat-message">
      {/* User profile section */}
      <div className="user-profile">
        <AccountCircleIcon fontSize="medium" />
        <b className="username">{username}</b>
        <span id="timeString">{timeString}</span>
      </div>
      {/* Message content section */}
      <div>
        <span className="text">{text}</span>
        {/* Like button */}
        <IconButton onClick={onLike}>
          <ThumbUpIcon fontSize="small" />
          <span className="like-counter">{likes}</span>
        </IconButton>
      </div>
    </div>
  );
};

export default ChatMessage;
