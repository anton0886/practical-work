import axios from "axios";


const API = "https://api.imgur.com/3";

const PARAMS = {
    headers: {
        Authorization: "Client-ID 121926766c8002b"
    }
};

const getAlbumID = () => {
    return axios.get(`${API}/account/anton0886/albums/ids/0`, PARAMS);
};

const getAlbumImages = (hash) => {
    return axios.get(`${API}/album/${hash}/images`, PARAMS);
};

export { getAlbumID, getAlbumImages };