import axios from 'axios';

  const baseUrl = 'http://localhost:3000'; 

  export const getUsers = () => {
      return axios.get(`${baseUrl}/usuarios`);
  };

  export const loginUser = async (correo: string, contrasena: string) => {
    console.log("Datos enviados:", correo, contrasena);
    return axios.post(`${baseUrl}/usuarios/login`, {
        correo,
        contrasena,
      });
  }