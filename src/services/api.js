import axios from "axios";

// BASE DA URL: https://api.themoviedb.org/3/
// URL: /movie/now_playing?api_key=b1b7ccdd5a908ba028fbdf93beb2a00f&language=pt-BR

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/"
})

export default api;
