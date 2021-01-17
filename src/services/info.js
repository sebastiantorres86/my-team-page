/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";
const baseUrl = "https://mysterious-tor-79037.herokuapp.com/api/info";

const getAll = () => {
  return axios.get(baseUrl);
};

export default { getAll };
