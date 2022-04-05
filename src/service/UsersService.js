import http from "./BaseService";

export const getAllUsers = () => http.get("/users")