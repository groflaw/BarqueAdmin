import io from "socket.io-client"; // Import the socket.io client library
import { Socket_API } from "../utils/Constant";

const socket = io(Socket_API);

export default socket;
