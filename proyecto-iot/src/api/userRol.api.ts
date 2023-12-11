import axios from 'axios';
import { UserRolList } from '../types/userRolService';

  const baseUrl = 'http://localhost:3000'; 

  export const getUserRol = () => {
    return axios.get<UserRolList[]>(`${baseUrl}/usuarioRol`);
  };