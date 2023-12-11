import React, { useEffect, useState } from "react";
import { User, FileText, Clipboard, ChevronDown } from "react-feather";
import { Link } from "react-router-dom";
import { LoginAuth } from "../types/loginService";
import Header from "./Header";

const Sidebar: React.FC = () => {
  const [solicitudOpen, setSolicitudOpen] = useState(false);
  const [userDetails, setUserDetails] = useState<LoginAuth | null>(null);

  const toggleListar = () => {
    setSolicitudOpen(!solicitudOpen);
  };

  useEffect(() => {
    const userDetailsString = localStorage.getItem("userDetails");
    if (userDetailsString) {
      const userDetailsData = JSON.parse(userDetailsString);
      setUserDetails(userDetailsData);
    }
  }, []);

  return (
    <div className="bg-gray-900 text-white w-1/5 h-screen fixed top-0 left-0 p-4 z-10">
      <Header />
      <div className="pl-4 mt-16 ml-1">
          <Link
            to="/Dashboard"
            className="text-3xl font-bold mb-6 text-blue-400">Dashboard
          </Link>
          </div>

      <div className="mb-6">
        <div className="flex items-center mb-2">
          <User className="w-5 h-5 mr-2" />
          {userDetails && (
            <span>
              Bienvenido Sr. {userDetails.nombre} {userDetails.apellido}
            </span>
          )}
        </div>
      </div>

      {userDetails?.roles?.includes("administrador") && (
        <div className="cursor-pointer" onClick={toggleListar}>
          <FileText className="w-5 h-5 inline " /> administrar
          <ChevronDown className="w-4 h-4 inline ml-1" />
        </div>
      )}

      {solicitudOpen && userDetails?.roles?.includes("administrador") && (
        <div className="pl-4">
          <Link
            to="/listar/usuarios"
            className="block text-white hover:text-blue-500 mb-2"
          >
            <Clipboard className="w-4 h-4 inline mr-1" /> Listar usuarios
          </Link>
        
        </div>
      )}
    </div>
  );
};

export default Sidebar;