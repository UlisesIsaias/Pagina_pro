import React from "react";

export default function Home({ onLogout }) {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
      <h1 className="text-2xl mb-4">
        Bienvenido, <span className="text-ktm font-bold">{user?.email}</span>
      </h1>
      <button
        onClick={() => {
          localStorage.removeItem("user");
          onLogout();
        }}
        className="bg-red-600 hover:bg-red-700 transition px-6 py-2 rounded-md"
      >
        Cerrar sesión
      </button>
    </div>
  );
}
