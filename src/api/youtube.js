import axios from "axios";

const KEY = "AIzaSyB2-mJglJQXxLkEoasAi0YlwhV8khPQVlc";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
