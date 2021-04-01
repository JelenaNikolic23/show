import { BASE_URL } from "./data"

export const API = {
    get (path) {
        return fetch(BASE_URL + path).then (res => res.json())
    }
}