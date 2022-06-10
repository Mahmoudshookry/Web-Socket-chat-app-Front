import { useEffect } from "react";
import io from "socket.io-client";
import { Widget, addResponseMessage } from "react-chat-widget";
import "react-chat-widget/lib/styles.css";

const Base_URL = "http://localhost:5000";

const socket = io(Base_URL);

const Ws = () => {
  const handleNewUserMessage = (message) => {
    console.log(message);
    socket.emit("message", { message: message });
  };
  useEffect(() => {
    socket.on("message", (message) => {
      addResponseMessage(message.message);
    });
  }, []);
  return (
    <>
      <Widget handleNewUserMessage={handleNewUserMessage} />
    </>
  );
};
export default Ws;
