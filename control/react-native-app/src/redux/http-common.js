import axios from "axios";

export default axios.create({
  baseURL: "https://api.thingspeak.com/channels",
  headers: {
    'Content-Type': "application/json"
  }
});