import { toast } from "react-toastify";
import io from "socket.io-client";
let socket;

export const getFoundCardSocket = () => {
  let message;
  socket.on("getFoundCard", (data) => {
    toast(data);
    message = data;
  });
  return message;
};

export const initiateSocket = (data) => {
  const { id } = data;
  let message;
  if (!socket) {
    socket = io(process.env.NEXT_PUBLIC_BACKEND_URL);
    socket.emit("join", { userId: id });
    const data = getFoundCardSocket();
    message = data;
  }
  return message;
};

export const disconnectSocket = () => {
  if (socket) socket.disconnect();
};

export const foundCardSocket = (data) => {
  if (socket) socket.emit("foundCard", data);
};

export default socket;
