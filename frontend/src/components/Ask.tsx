import { useState, useRef, useEffect } from "react";
import { Navbar } from "./Navbar";
import { Send, RefreshCw } from "lucide-react"; // Icons

// Define TypeScript types for messages
type Message = {
  role: "user" | "bot";
  content: string;
};

const Ask = () => {
  const [input, setInput] = useState<string>(""); // User input
  const [messages, setMessages] = useState<Message[]>([]); // Chat messages
  const [loading, setLoading] = useState<boolean>(false); // Loading state
  const messagesEndRef = useRef<HTMLDivElement | null>(null); // Auto-scroll reference

  // Function to fetch response from backend
  const sendMessage = async () => {
    if (!input.trim()) return;
    setLoading(true);

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);

    try {
      const response = await fetch("http://localhost:5000/api/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: input }),
      });

      const data = await response.json();
      const botMessage: Message = {
        role: "bot",
        content: data.response || "Sorry, no response found. Please try again.",
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { role: "bot", content: "Error fetching response. Try again!" },
      ]);
    } finally {
      setLoading(false);
      setInput("");
    }
  };

  // Auto-scroll to latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center h-[calc(100vh-64px)] bg-white dark:bg-background overflow-hidden">
        {/* Chat Container */}
        <div className="w-full max-w-2xl flex-grow overflow-y-auto px-4 py-6 space-y-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`p-3 rounded-xl ${
                msg.role === "user"
                  ? "bg-themeGreen text-white self-end"
                  : "bg-gray-200 dark:bg-zinc-800 text-gray-900 dark:text-gray-100"
              }`}
            >
              {msg.content}
            </div>
          ))}
          {loading && (
            <div className="text-themeOrange animate-pulse">
              Generating ✨...
            </div>
          )}
          <div ref={messagesEndRef}></div>
        </div>

        {/* Input Field & Send Button */}
        <div className="w-full max-w-2xl p-4 flex items-center border-t dark:border-gray-700">
          <input
            type="text"
            className="flex-grow px-4 py-2 border rounded-xl dark:bg-zinc-900 dark:text-white"
            placeholder="Paste your code here ..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button
            className={`ml-3 p-2 rounded-full text-white ${
              input.trim() ? "bg-themeGreen" : "bg-gray-300 cursor-not-allowed"
            }`}
            onClick={sendMessage}
            disabled={!input.trim()}
          >
            <Send className="w-5 h-5" />
          </button>
          <button
            className="ml-2 p-2 rounded-full bg-themeOrange text-white"
            onClick={() => setMessages([])}
          >
            <RefreshCw className="w-5 h-5" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Ask;
