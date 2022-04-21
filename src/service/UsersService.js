import http from "./BaseService";

export const getAllUsers = () => http.get("/users")
export const getUser = (id) => http.get(`users/${id}`)