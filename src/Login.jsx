import React, { useState } from "react";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify({ email, password }));
    onLogin();
  };

  return (
    <div
      className="flex items-center justify-center h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url('/imafon.jpg')`,
      }}
    >
      <form
        onSubmit={handleSubmit}
        className="bg-white/10 backdrop-blur-md p-10 rounded-2xl shadow-2xl w-full max-w-md border border-white/20 text-white"
      >
        <h1 className="text-4xl font-bold text-ktm text-center mb-8 drop-shadow-md">
         Login
        </h1>

        <input
          type="email"
          placeholder="Correo"
          className="w-full mb-6 px-4 py-3 bg-white/20 text-white placeholder-gray-300 border border-white/30 rounded-md focus:outline-none focus:ring-2 focus:ring-ktm"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Contraseña"
          className="w-full mb-8 px-4 py-3 bg-white/20 text-white placeholder-gray-300 border border-white/30 rounded-md focus:outline-none focus:ring-2 focus:ring-ktm"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full bg-ktm py-3 rounded-md text-white font-semibold text-lg hover:bg-orange-700 transition"
        >
          Iniciar sesión
        </button>
      </form>
    </div>
  );
}
