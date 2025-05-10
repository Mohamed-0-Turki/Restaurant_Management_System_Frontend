import { useState } from "react"
import { Send, X } from "lucide-react"

const ChatWindow = ({ onClose, messages, onSend }) => {
  const [input, setInput] = useState("")

  const handleSend = () => {
    if (input.trim() !== "") {
      onSend(input)
      setInput("")
    }
  }

  return (
    <div className="fixed bottom-10 right-10 w-80 h-96 bg-white shadow-xl rounded-xl flex flex-col overflow-hidden border border-gray-200">
      {/* Header */}
      <div className="bg-blue-500 text-white px-4 py-3 flex justify-between items-center">
        <h3 className="text-lg font-semibold">Chat</h3>
        <button onClick={onClose} className="cursor-pointer">
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 overflow-y-auto space-y-2 flex flex-col">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex ${
              msg.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`p-2 rounded-md max-w-[75%] ${
                msg.sender === "user"
                  ? "bg-blue-500 text-white rounded-br-none"
                  : "bg-gray-200 text-black rounded-bl-none"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>


      {/* Input */}
      <div className="border-t p-2 flex items-center">
        <input
          type="text"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          className="flex-1 border border-gray-300 rounded-xl px-4 py-2 text-sm focus:outline-none"
        />
        <button
          onClick={handleSend}
          className="ml-2 text-blue-500 font-semibold hover:text-blue-600 cursor-pointer"
        >
          <Send />
        </button>
      </div>
    </div>
  )
}

export default ChatWindow
