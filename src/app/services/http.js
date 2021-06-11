export const http = {
  baseURL: "https://run.mocky.io/v3",
  headers: {
    method: "GET",
    headers: {
      Accept: "*/*",
    },
  },
};


export const users = {
  baseURL: "./users.json",
  headers : { 
    'Content-Type': 'application/json',
    'Accept': 'application/json'
   }
};