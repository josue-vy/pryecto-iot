import React, { useState, useEffect } from "react";
import Header from "./Header";
import { DataItem } from "../interface/dataItem";

const Dashboard: React.FC = () => {
  const [data, setData] = useState<DataItem[]>([]);

  useEffect(() => {
    fetch("http://localhost:4000/Informacion")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-4xl p-8 ml-80"> {/* Aumenté el ancho y el padding */}
        <Header />
            <table className="w-full bg-white shadow-md rounded">
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
                    <td className="py-90 px-90 border border-gray-300">
                      <img
                        src={item.Foto}
                        alt="Foto"
                        className="p-4 h-60 w-80 rounded-md"
                      />
                    </td>
                    <td className="py-20 px-20 border border-gray-300">
                      {item.Fecha}
                    </td>
                    <td className="py-20 px-20 border border-gray-300">
                      {item.Identificador}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
  );
};

export default Dashboard;
