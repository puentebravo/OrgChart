/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";
const ENDPOINT = "https://randomuser.me/api/?results=50&noinfo&exc=login,registered,dob&format=prettyJSON";

export default {
    ping: function() {
        return axios.get(ENDPOINT);
    }
};