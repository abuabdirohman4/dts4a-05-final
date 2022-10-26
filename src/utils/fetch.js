import axios from "axios";
import { config } from "../configs";

function getToken() {
  const { token } = localStorage.getItem("auth")
    ? JSON.parse(localStorage.getItem("auth"))
    : {};
  return token;
}

export async function getData(url, params) {
  try {
    const token = getToken();
    return await axios.get(`${config.api_host}${url}`, {
      params,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function postData(url, payload, formData) {
  try {
    const token = getToken();
    return await axios.post(`${config.api_host}${url}`, payload, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": formData ? "multipart/form-data" : "application/json",
      },
    });
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function putData(url, payload) {
  try {
    const token = getToken();
    return await axios.put(`${config.api_host}${url}`, payload, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function deleteData(url) {
  try {
    const token = getToken();
    return await axios.delete(`${config.api_host}${url}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.log(error);
    return error;
  }
}
