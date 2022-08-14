import { http } from '../config.js'

const END_POINT = '/houses'

export const addNewHouse = (params) => http.post(END_POINT, params)
export const getHouses = () => http.get(END_POINT)
export const addNewHouseImage = (id, image) => http.post(`${END_POINT}/${id}/upload`, image)
export const deleteHouse = (id) => http.delete(`${END_POINT}/${id}`)
export const updateHouse = (id, params) => http.post(`${END_POINT}/${id}`, params)
