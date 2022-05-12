import axios from "axios";
const KEY = 'AIzaSyBrGzLLNPC_AJLgunDJSqeD5cnwgfn89f8';

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: 10,
        key: KEY
    }
});

