import axios from "axios";
const BASE_URL = "https://fakestoreapi.com";

export async function getRequest(url: string): Promise<any> {
  return await axios.get(`${BASE_URL}/${url}`);
}

export async function postRequest(url: string, body: any): Promise<any> {
  return await axios.post(`${BASE_URL}/${url}`, body);
}
