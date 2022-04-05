import http from "./BaseService";

export const getAllPhotos = () => http.get("/photos")
export const getPhoto = (id) => http.get(`photos/${id}`)