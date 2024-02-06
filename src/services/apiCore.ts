import axios from "axios"

export const apiCore = axios.create({
  baseURL: "http://localhost:3000/",
})
