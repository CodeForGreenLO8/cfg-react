import axios from "axios";
const send = (url, options = {}, method = "get", headers = {}) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!window.navigator.onLine) {
        reject("Brak dostępu do internetu!");
      }
      const { data } = await axios[method](url, options, { headers });
      resolve(data);
    } catch (e) {
      reject(e);
    }
  });
};
export const API = {
  base: process.env.NEXT_PUBLIC_API_URL,
};
const useAuth = (url, options, method) => {
  const headers = {
    Authorization: `Basic ${process.env.NEXT_PUBLIC_API_AUTH_TOKEN}`,
  };
  return send(url, options, method, headers);
};
export const getUrl = (url, options, method) => send(url, options, method);

/*********** */

export const getFreeUrl = (url = "") => send(`${API.base}/api/url/${url}`);

// export const sendVisit = (options) =>
//   useAuth(`${API.base}/visiting`, options, "post");