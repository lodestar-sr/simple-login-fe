import { ICreateUserPayload, ILoginUserPayloadDto } from './../common/index';
import axios from "axios"

const httpRequest = axios.create({
    baseURL: "http://localhost:3001",
    headers: {
        "Content-Type": "application/json",
    }
})

export const register = async (data: ICreateUserPayload) => {
    return await httpRequest.post("/user/create", data)
}

export const login = async (data: ILoginUserPayloadDto) => {
    return await httpRequest.post("/user/login", data)
}