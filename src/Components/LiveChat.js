import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addChatInStore } from "../utils/ChatSlice";
import { generateRandomName, generateRandomMessage } from "../utils/helper";

function LiveChat() {
  const [chatText, setChatText] = useState("");

  const dispatch = useDispatch();
  // Api Polling
  useEffect(() => {
    const timer = setInterval(() => {
      // Here we are polling the api and dispatch it in store.
      // console.log("Api pollig");
      dispatch(
        addChatInStore({
          name: generateRandomName(),
          message: generateRandomMessage(),
        })
      );
    }, 1500);

    // always remennber when we use setInterval or setTimeout distroy the the time before leaving the corrent page or rerender.
    return () => {
      clearInterval(timer);
    };
  }, []);

  const getChatFromStore = useSelector((store) => store.chatStore.message);

  // Send message to store
  const sendLiveChatMessage = (chat) => {
    // console.log(chat);
    dispatch(addChatInStore(chat));
  };

  return (
    <div>
      <div>
        {getChatFromStore.map((chat, index) => (
          <ChatMessage key={index} name={chat.name} message={chat.message} />
        ))}
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          setChatText("");
        }}
      >
        <input
          className="m-1 ml-3  px-2 border-1 border-black bg-gray-300 rounded-lg"
          placeholder="ddj"
          value={chatText}
          onChange={(e) => {
            setChatText(e.target.value);
          }}
        />
        <button
          className="m-1 ml-2 px-2 bg-green-400 border border-black rounded-lg"
          onClick={(e) => {
            sendLiveChatMessage({
              name: "Abhishek",
              message: chatText,
            });
          }}
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default LiveChat;
