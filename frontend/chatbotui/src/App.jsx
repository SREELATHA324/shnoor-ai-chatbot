import React, { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import shnoorData from "./data/shnoorData";

function App() {

  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);

  const [showHistory, setShowHistory] = useState(false);


  const [chatHistory, setChatHistory] = useState([
    {
      sender: "ai",
      text: "Welcome to SHNOOR AI Assistant!"
    }
  ]);



  const startNewChat = () => {

    setChatHistory([
      {
        sender: "ai",
        text: "New chat started! How can I help you?"
      }
    ]);

  };




  const sendMessage = (e) => {

    e.preventDefault();


    if (message.trim() === "") return;


    const userMessage = message;


    setChatHistory((prev) => [
      ...prev,
      {
        sender: "user",
        text: userMessage
      }
    ]);


    setMessage("");

    setLoading(true);



    const question = userMessage.toLowerCase();

    let aiReply = "";



    if (
  question.includes("shnoor") ||
  question.includes("about") ||
  question.includes("company")
) {

  aiReply = shnoorData.faq["what is shnoor"];

}

else if (
  question.includes("service") ||
  question.includes("solution") ||
  question.includes("provide")
) {

  aiReply = shnoorData.faq["services"];

}

else if (
  question.includes("website") ||
  question.includes("portal") ||
  question.includes("platform")
) {

  aiReply = shnoorData.faq["websites"];

}

else if (
  question.includes("contact") ||
  question.includes("email") ||
  question.includes("reach")
) {

  aiReply = shnoorData.faq["contact"];

}

else if (
  question.includes("ai") ||
  question.includes("reinforcement")
) {

  aiReply = shnoorData.faq["reinforcement learning"];

}

else {

  aiReply = shnoorData.default;

}

    setTimeout(() => {

      setChatHistory((prev) => [
        ...prev,
        {
          sender: "ai",
          text: aiReply
        }
      ]);

      setLoading(false);

    },1000);


  };





  return (

    <div className="flex h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950">


      <Sidebar
        startNewChat={startNewChat}
        openHistory={() => setShowHistory(true)}
      />




      {showHistory && (

        <div className="fixed right-5 top-5 w-80 bg-zinc-900 text-white p-5 rounded-lg shadow-lg z-50">


          <div className="flex justify-between mb-4">

            <h2 className="text-xl font-bold">
              Chat History
            </h2>


            <button
              onClick={() => setShowHistory(false)}
              className="bg-red-600 px-3 py-1 rounded"
            >
              X
            </button>


          </div>



          {chatHistory.map((chat,index)=>(

            <div
              key={index}
              className="bg-zinc-800 p-3 rounded mb-2"
            >

              {chat.text}

            </div>

          ))}


        </div>

      )}





      <div className="flex-1 p-3 flex justify-center items-center">


        <div className="w-full max-w-xl bg-zinc-900 rounded-lg p-4">


          <h1 className="text-lg text-white mb-3 font-semibold">
            SHNOOR AI Chatbot
          </h1>




          <div className="h-[350px] overflow-y-auto">



            {chatHistory.map((chat,index)=>(


              <div
                key={index}
                className={`p-3 my-2 rounded-lg w-fit max-w-lg ${
                  
                  chat.sender === "user"
                  ? "bg-blue-600 text-white ml-auto"
                  : "bg-zinc-700 text-white"

                }`}
              >

                {chat.text}

              </div>


            ))}



            {loading && (

              <div className="p-3 my-2 rounded-lg bg-zinc-700 text-white w-fit">

                AI is typing...

              </div>

            )}



          </div>
          <div className="flex gap-2 mb-3 flex-wrap">

  <button
    onClick={() => setMessage("What is Shnoor?")}
    className="bg-zinc-800 text-white px-3 py-2 rounded-lg text-sm"
  >
    About Shnoor
  </button>


  <button
    onClick={() => setMessage("Services")}
    className="bg-zinc-800 text-white px-3 py-2 rounded-lg text-sm"
  >
    Services
  </button>


  <button
    onClick={() => setMessage("Contact")}
    className="bg-zinc-800 text-white px-3 py-2 rounded-lg text-sm"
  >
    Contact
  </button>

</div>





          <form
            onSubmit={sendMessage}
            className="flex gap-2 mt-3"
          >



            <input

              value={message}

              onChange={(e)=>setMessage(e.target.value)}

              placeholder="Ask about Shnoor..."

              className="flex-1 p-3 rounded-lg bg-zinc-800 text-white outline-none"

            />



            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 rounded-lg transition"
            >
              Send ➤
            </button>



          </form>



        </div>


      </div>


    </div>

  );

}


export default App;