import axios from "axios";
import { config } from "../configs";

// function getToken() {
//   const { token } = localStorage.getItem("auth")
//     ? JSON.parse(localStorage.getItem("auth"))
//     : {};
//   return token;
// }

const token = "?api_token=ZvvgWFCIe5Jba9tNGiifUKv9vyiHD8YwuciUwhV7";

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

// export async function postData(url, payload, formData) {
//   try {
//     return await axios.post(`${config.api_host}${url}`, payload, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//         "Content-Type": formData ? "multipart/form-data" : "application/json",
//       },
//     });
//   } catch (error) {
//     console.log(error);
//     return error;
//   }
// }

// export async function putData(url, payload) {
//   try {
//     return await axios.put(`${config.api_host}${url}`, payload, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
//   } catch (error) {
//     console.log(error);
//     return error;
//   }
// }

// export async function deleteData(url) {
//   try {
//     return await axios.delete(`${config.api_host}${url}`, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
//   } catch (error) {
//     console.log(error);
//     return error;
//   }
// }
