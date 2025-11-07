import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import './Welcome.css';

function Welcome() {
  const [searchParams] = useSearchParams();
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const name = searchParams.get('name');
    setUserName(name || 'Usuario');
  }, [searchParams]);

  return (
    <div className="welcome-container">
      <img src="/utez-logo.png" alt="Logo UTEZ" className="utez-logo" />
      <h1>¡Bienvenido a Champions League Streaming, {userName}!</h1>
      <div className="welcome-content">
        <p>Has iniciado sesión exitosamente con Google</p>
        
        {/* Frame del video de YouTube */}
        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/lx16i4Xj3uY"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        
      </div>
      <button onClick={() => window.location.href = 'http://localhost:5000/logout'} className="logout-button">
        Cerrar Sesión
      </button>
    </div>
  );
}

export default Welcome;