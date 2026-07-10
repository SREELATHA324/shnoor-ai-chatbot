import React from "react";
import logo from "../assets/shnoor-logo.jpg";
import { FaPlus, FaHistory, FaInfoCircle } from "react-icons/fa";

const Sidebar = ({ startNewChat, openHistory }) => {

  const showAbout = () => {
    alert("SHNOOR AI - Your AI Assistant");
  };


  return (

    <div className="w-64 h-screen bg-zinc-900 text-white p-5 border-r border-zinc-700">


      {/* Logo */}

      <div className="flex items-center gap-3 mb-8">

        <img
          src={logo}
          alt="Shnoor Logo"
          className="w-10 h-10 rounded-full"
        />

        <h1 className="text-xl font-bold">
          SHNOOR AI
        </h1>

      </div>



      {/* New Chat */}

      <button
        onClick={startNewChat}
        className="flex items-center gap-3 w-full bg-blue-600 p-3 rounded-lg mb-4"
      >

        <FaPlus />

        New Chat

      </button>




      {/* History */}

      <button
        onClick={openHistory}
        className="flex items-center gap-3 w-full bg-zinc-800 p-3 rounded-lg mb-4"
      >

        <FaHistory />

        History

      </button>





      {/* About */}

      <button
        onClick={showAbout}
        className="flex items-center gap-3 w-full bg-zinc-800 p-3 rounded-lg"
      >

        <FaInfoCircle />

        About

      </button>



    </div>

  );

};


export default Sidebar;