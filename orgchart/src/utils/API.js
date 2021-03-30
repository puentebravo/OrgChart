import axios from "axios";
const ENDPOINT = "https://randomuser.me/api/";

export default {
    ping: function() {
        return axios.get(ENDPOINT);
    }
};