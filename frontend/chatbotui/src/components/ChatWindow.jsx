import React, { useState } from "react";

const ChatWindow = () => {
  const [message, setMessage] = useState("");

  return (
    <div className="flex-1 h-screen bg-zinc-800 text-white flex flex-col">

      {/* Header */}
      <div className="p-4 border-b border-zinc-700">
        <h1 className="text-xl font-semibold">Shnoor AI</h1>
      </div>

      {/* Messages Area */}
      <div className="flex-1 p-5 overflow-y-auto">
        <div className="bg-zinc-700 p-3 rounded-lg w-fit">
          Hello! I am Shnoor AI 🤖 How can I help you?
        </div>
      </div>

      {/* Input Area */}
      <div className="p-4 border-t border-zinc-700 flex gap-3">

        <input
          type="text"
          placeholder="Message Shnoor AI..."
          value={message}
          onChange={(e)=>setMessage(e.target.value)}
          className="flex-1 bg-zinc-700 rounded-lg px-4 py-3 outline-none"
        />

        <button className="bg-blue-600 px-5 rounded-lg">
          Send
        </button>

      </div>

    </div>
  );
};

export default ChatWindow;