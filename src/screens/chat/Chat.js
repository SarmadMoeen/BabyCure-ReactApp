import React from "react";
import { useState } from "react";

const Chat = () => {
  const [showChat, setShowChat] = useState(false);

  const handleChatToggle = () => {
    setShowChat(!showChat);
  };

  return (
    <div className="container">
      <button className="button" onClick={handleChatToggle}>
        Toggle Chat
      </button>

      {showChat && (
        <iframe
          src="https://tawk.to/chat/641f0bf231ebfa0fe7f49fbd/1gsckdmg0"
          style={{ width: "100%", height: "100vh" }}
        />
      )}
    </div>
  );
};

export default Chat;
