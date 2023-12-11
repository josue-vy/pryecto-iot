import axios from 'axios';
import { UserRegister } from '../types/userService';

  const baseUrl = 'http://localhost:3000'; 

  export const getUsers = () => {
      return axios.get(`${baseUrl}/usuarios`);
  };

  export const login = async (correo: string, contrasena: string) => {

      const response = await axios.post(`${baseUrl}/usuarios/login`, {
        correo,
        contrasena,
      });
      return response.data;

};
export const registerUser = async (userData: UserRegister) => {
  return axios.post(`${baseUrl}/usuarios`, userData, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};