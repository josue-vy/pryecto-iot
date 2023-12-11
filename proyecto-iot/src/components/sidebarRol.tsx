import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ChevronDown,
  Clipboard,
  Layers,
  Menu,
  FileText,
} from "react-feather"; // Importa los iconos

const Sidebar: React.FC = () => {
  const [solicitudOpen, setSolicitudOpen] = useState(false);

  const toggleListar = () => {
    setSolicitudOpen(!solicitudOpen);
  };


  return (
    <div className="bg-gray-900 text-white w-1/5 h-screen fixed top-0 left-0 p-4 z-10">
      <div className="text-3xl font-bold mb-6 text-blue-400">Dashboard</div>

      <div className="mb-6">
        <Link
          to="/dashboard"
          className=" text-white hover:text-blue-500 mb-2 flex items-center"
        >
          <Menu className="w-5 h-5 mr-2" /> Dashboard
        </Link>
        <div className="cursor-pointer" onClick={toggleListar}>
          <FileText className="w-5 h-5 inline " /> administrar
          <ChevronDown className="w-4 h-4 inline ml-1" />
        </div>
        {solicitudOpen && (
          <div className="pl-4">
            <Link
              to="/listar/1"
              className="block text-white hover:text-blue-500 mb-2"
            >
              <Clipboard className="w-4 h-4 inline mr-1" /> Listar
            </Link>
            <Link
              to="/listar/2"
              className="block text-white hover:text-blue-500 mb-2"
            >
              <Layers className="w-4 h-4 inline mr-1" /> Listar
            </Link>
          </div>
        )}
      
      </div>
    </div>
  );
};

export default Sidebar;