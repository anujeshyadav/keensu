import axios from "axios";

const instance = axios.create({
  // baseURL: "http://43.205.212.101:4000",
  baseURL: "https://api.keensuk.live/",

  // baseURL: "https://nodejsbackend.astrologically.in",
  // baseURL: "https://nodejsbackend.astrologically.in",
});

export default instance;
