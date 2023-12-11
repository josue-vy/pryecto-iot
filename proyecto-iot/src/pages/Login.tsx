import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../api/user.api";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await login(username, password);
      console.log("Inicio de sesión exitoso:", response);
      localStorage.setItem("userDetails", JSON.stringify(response));
      navigate("/dashboard");
    } catch (error) {
      console.error("Error en el inicio de sesión:", error);
    }
  };

  return (
    <section>
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24 ">
          <div className="grid flex-wrap items-center justify-center grid-cols-1 mx-auto shadow-xl lg:grid-cols-2 rounded-xl mt-8 p-40 bg-gray-200">
            <div className="w-full px-6 py-3">
              <div>
                <div className="mt-3 text-left sm:mt-5">
                  <div className="inline-flex items-center w-full">
                    <h3 className="text-lg font-bold text-neutral-600 leading-6 lg:text-5xl">
                      Iniciar Sesión
                    </h3>
                  </div>
                  <div className="mt-4 text-base text-gray-500">
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-2">
                {/* Aquí comienza el formulario */}
                <form onSubmit={handleLogin}>
                  <div>
                    <label htmlFor="email" className="sr-only">
                      Email
                    </label>
                    <input
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label htmlFor="password" className="sr-only">
                      Password
                    </label>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                      placeholder="Enter your password"
                    />
                  </div>
                  <div className="flex flex-col mt-4 lg:space-y-2">
                    <button
                      type="submit"
                      className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Iniciar Sesion
                    </button>
                  </div>
                </form>
                {/* Aquí termina el formulario */}
              </div>
            </div>
            <div className="order-first hidden w-full lg:block">
              <img
                className="object-cover h-full bg-cover rounded-l-lg"
                src="src/images/Screenshot_23.png"
                alt=""
              />
            </div>
          </div>
        </div>
    </section>
  );
};
export default Login;
