import React from 'react';
import './Home.css';

function Home() {
  const handleLogin = () => {
    window.location.href = 'http://localhost:5000/login';
  };

  return (
    <div className="home-container">
      <img src="/utez-logo.png" alt="Logo UTEZ" className="utez-logo" />
      <h1>Champions League Streaming</h1>
      <div className="description">
        <p>Disfruta de todos los partidos de la UEFA Champions League</p>
        <p>Barrera Calderon Jonathan Alberto. 7D IDGS</p>
        <img src="/champions.png" alt="Logo Champions League" className="utez-logo" />
      </div>
      <button onClick={handleLogin} className="login-button">
        Iniciar sesión con Google
      </button>
    </div>
  );
}

export default Home;