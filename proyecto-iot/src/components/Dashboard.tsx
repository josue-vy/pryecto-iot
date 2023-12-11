import React, { useState, useEffect } from "react";
import Header from "./Header";
import { DataItem } from "../interface/dataItem";

const Dashboard: React.FC = () => {
  const [data, setData] = useState<DataItem[]>([]);
  console.log(data)

  useEffect(() => {
    fetch("http://localhost:4000/Informacion") // Reemplaza '4000' con el puerto de tu servidor Express
      .then((response) => response.json())
      .then((data) => {
        setData(data); // Almacena los datos recibidos en el estado
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-3xl p-6">
        <Header />
        <div className="mt-6">
          <table className="min-w-full bg-white shadow-md rounded">
            <thead className="bg-gray-200 text-gray-700">
              <tr>
                <th className="py-3 px-4 border border-gray-300">Foto</th>
                <th className="py-3 px-4 border border-gray-300">Fecha</th>
                <th className="py-3 px-4 border border-gray-300">
                  Identificador
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.IdInformacion} className="hover:bg-gray-50">
                  <td className="py-2 px-4 border border-gray-300">
                    <img
                      src={item.Foto}
                      alt="Foto"
                      className="h-80 w-80 object-cover"
                    />
                  </td>
                  <td className="py-2 px-4 border border-gray-300">
                    {item.Fecha}
                  </td>
                  <td className="py-2 px-4 border border-gray-300">
                    {item.Identificador}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
