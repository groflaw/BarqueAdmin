import io from "socket.io-client"; // Import the socket.io client library
import { Socket_API } from "../utils/Constant";
import { showNotification } from "./notification";

const socket = io(Socket_API);

const handleNotification = async (message) => {
  showNotification("Barque", {
    body: message,
  });
};

socket.on("alertaddnewboat", handleNotification);
socket.on("receivebooking", handleNotification);
socket.on("Admin:hostresbooking", handleNotification);
socket.on("Admin:reqcancel", handleNotification);

export default socket;
