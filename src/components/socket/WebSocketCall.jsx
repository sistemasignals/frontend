import { useEffect, useState } from "react";

export default function WebSocketCall({ socket }) {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleText = (e) => {
    const inputMessage = e.target.value;
    setMessage(inputMessage);
  };

  const handleSubmit = () => {
    if (!message) {
      return;
    }
    console.log(message)
    socket.emit("data", message);
    setMessage("");
  };

  useEffect(() => {
    socket.on("data", (data) => {
        console.log(data)
      setMessages([...messages, data.data]);
    });
    return () => {
      socket.off("data", () => {
        console.log("data event was removed");
      });
    };
  }, [socket, messages]);

  return (
    <div>
      <h2>WebSocket Communication</h2>
      <input type="text" 
      className="border-1 border-2"
      value={message} onChange={handleText} />
      <button 
      className="bg-green-500 p-2 text-white"
      onClick={handleSubmit}>submit</button>
      <ul>
        {messages.map((message, ind) => {
          return <li 
         className="text-black" key={ind}>{message}</li>;
        })}
      </ul>
    </div>
  );
}