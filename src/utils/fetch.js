import axios from "axios";
import { config } from "../configs";

// const token = "?api_token=ZvvgWFCIe5Jba9tNGiifUKv9vyiHD8YwuciUwhV7";
const token = "?api_token=VyhEkkRLUppAPeby9BqxPI00CogPLsvOX38PmxDN";

export async function getData(url, params) {
  try {
    return await axios.get(`${config.api_host}${url}${token}`, {
      params,
    });
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function postData(url, payload) {
  try {
    return await axios.post(`${config.api_host}${url}${token}`, payload);
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function putData(url, payload) {
  try {
    return await axios.put(`${config.api_host}${url}${token}`, payload);
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function deleteData(url) {
  try {
    return await axios.delete(`${config.api_host}${url}${token}`);
  } catch (error) {
    console.log(error);
    return error;
  }
}
