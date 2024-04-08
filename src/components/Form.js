import React, { useState } from 'react';
import axios from 'axios';
import ErrorMensaje from '../components/ErrorMessage';
import '../styles/formStyles.css';

const Form = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    limpiarError();

    try {
      // Realiza la petición POST con Axios
      const response = await axios.post('http://localhost:3001/islas', {
        user_id: userId,
        password: password,
      });

      // Usa la URL devuelta para redirigir al usuario
      window.location.href = response.data;
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setError('Usuario o contraseña incorrecta.'); // Un mensaje de error específico
      } else {
        setError('Ocurrió un error al intentar iniciar sesión. Por favor, inténtalo de nuevo más tarde.');
      }
    }
  };

  const limpiarError = () => {
    setError('');
  };
  return (
    <div className="create">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="userId">User ID:</label>
        <input
          type="text"
          id="userId"
          required
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>
      </form>
      <ErrorMensaje mensaje={error} limpiarError={limpiarError} />
    </div>
  );
}

export default Form;
