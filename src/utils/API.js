/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";
const ENDPOINT = "https://randomuser.me/api/?results=50";

export default {
    ping: function() {
        return axios.get(ENDPOINT);
    }
};