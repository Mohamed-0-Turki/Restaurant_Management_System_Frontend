import React, { useEffect, useState, useRef } from "react";
import { Send, Users } from "lucide-react";
import { useSelector } from "react-redux";
import * as signalR from "@microsoft/signalr";
import { useGetChatHistory } from "../hooks/useChatHook";

const ChatPage = () => {
  const { userId, token } = useSelector((state) => state.auth);
  const [receiverId, setReceiverId] = useState("");
  const [messageContent, setMessageContent] = useState("");
  const connectionRef = useRef(null);

  const {
    messages = [],
    isLoading,
    isError,
    error: queryError,
  } = useGetChatHistory(receiverId);

  const [localMessages, setLocalMessages] = useState([]);
  const [activeChatUser, setActiveChatUser] = useState("");

  useEffect(() => {
    if (receiverId && messages.length > 0) {
      setLocalMessages(messages);
    }
  }, [messages, receiverId]);

  useEffect(() => {
    if (!token || !userId) return;

    const connection = new signalR.HubConnectionBuilder()
      .withUrl("http://localhost:5135/chatHub", {
        accessTokenFactory: () => token,
        withCredentials: false,
      })
      .withAutomaticReconnect()
      .configureLogging(signalR.LogLevel.Information)
      .build();

    connection
      .start()
      .then(() => {
        console.log("SignalR connected.");
        connection.invoke("JoinChat", parseInt(userId));
        connectionRef.current = connection;
      })
      .catch((err) => {
        console.error("SignalR connection error:", err);
      });

    connection.on("ReceiveMessage", (newMsg) => {
      setLocalMessages((prev) => [...prev, newMsg]);
    });

    return () => {
      connection.stop();
    };
  }, [token, userId]);

  const sendMessage = async () => {
    const targetId = activeChatUser || receiverId;
    if (!targetId || !messageContent) return;

    if (!connectionRef.current || connectionRef.current.state !== "Connected") {
      console.error("SignalR is not connected yet.");
      return;
    }

    try {
      await connectionRef.current.invoke("SendMessage", parseInt(targetId), messageContent);
      setMessageContent("");
    } catch (err) {
      console.error("Failed to send message via SignalR.", err);
    }
  };

  // Extract unique sender IDs
  const uniqueSenders = [
    ...new Set(localMessages.map((msg) => msg.senderId).filter((id) => id !== parseInt(userId))),
  ];

  // Filter messages for selected user
  const filteredMessages = activeChatUser
    ? localMessages.filter(
        (msg) =>
          msg.senderId === parseInt(activeChatUser) || parseInt(userId) === msg.senderId
      )
    : localMessages;

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10 space-y-6">
      <h1 className="text-2xl font-bold text-center text-gray-800">💬 Chat Interface</h1>

      {/* Sender List */}
      {uniqueSenders.length > 0 && (
        <div className="flex gap-2 flex-wrap">
          {uniqueSenders.map((sender) => (
            <button
              key={sender}
              onClick={() => {
                setActiveChatUser(sender.toString());
                setReceiverId(""); // clear manual input
              }}
              className={`px-3 py-1 rounded border ${
                activeChatUser === sender.toString()
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-800"
              }`}
            >
              User {sender}
            </button>
          ))}
        </div>
      )}

      <div className="space-y-4">
        {/* Receiver ID input - hidden if a user is selected */}
        {!activeChatUser && (
          <div className="flex items-center gap-2">
            <Users className="text-gray-600" />
            <input
              type="number"
              className="flex-1 p-2 border rounded"
              placeholder="Receiver ID"
              value={receiverId}
              onChange={(e) => setReceiverId(e.target.value)}
            />
          </div>
        )}

        <div className="flex items-center gap-2">
          <input
            type="text"
            className="flex-1 p-2 border rounded"
            placeholder="Type a message"
            value={messageContent}
            onChange={(e) => setMessageContent(e.target.value)}
          />
          <button
            onClick={sendMessage}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded flex items-center gap-1"
          >
            <Send className="w-4 h-4" />
            Send
          </button>
        </div>

        {isError && <p className="text-red-500 text-sm">{queryError?.message}</p>}
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-2 text-gray-700">Chat History</h2>
        <div className="space-y-2 max-h-60 overflow-y-auto">
          {isLoading && <p className="text-gray-500">Loading chat history...</p>}
          {filteredMessages.length === 0 && !isLoading && (
            <p className="text-gray-500">No messages yet.</p>
          )}
          {filteredMessages.map((msg, index) => (
            <div
              key={msg.id || `${msg.senderId}-${msg.timestamp}-${index}`}
              className={`p-3 rounded-lg text-sm ${
                msg.senderId === parseInt(userId)
                  ? "bg-blue-100 text-right ml-auto"
                  : "bg-gray-100 text-left mr-auto"
              }`}
            >
              <p>{msg.content}</p>
              <span className="text-xs text-gray-400 block">
                {new Date(msg.timestamp).toLocaleString()}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
