
import React, { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:4000");

function App() {
  const [text, setText] = useState("");
  const textRef = useRef("");
  const roomId = "default-room";

  useEffect(() => {
    socket.emit("join-room", roomId);

    socket.on("text-change", (newText) => {
      textRef.current = newText;
      setText(newText);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const handleChange = (e) => {
    const newText = e.target.value;
    setText(newText);
    textRef.current = newText;
    socket.emit("text-change", { roomId, content: newText });
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Real-Time Collaborative Editor</h1>
      <textarea
        value={text}
        onChange={handleChange}
        rows="20"
        cols="80"
        className="border p-4 w-full font-mono"
      />
    </div>
  );
}

export default App;
