import axios from "axios";

export const fetchJSON = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  responseType: "json",
});

export const createJSON = data => axios.create({
  method: 'post',
  url: "https://jsonplaceholder.typicode.com/post",
  headers: {"Content-type": "application/json; charset=UTF-8"}, 
  data
});

export const fetchUIFaces = axios.create({
  baseURL: 'https://uifaces.co/api?limit=10',
  timeout: 1000,
  headers: {'X-API-KEY': 'f747c503141f51f60e566bee90caaf'}
});