import io from "socket.io-client";

let socket = io("//chat-server-realtime.vercel.app");

export default socket;
