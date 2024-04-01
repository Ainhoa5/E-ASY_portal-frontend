import React, { useState } from 'react';

const LoginForm = () => {
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Llamada a la función para consumir la API aquí
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>ID de Usuario:</label>
                <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} required />
            </div>
            <div>
                <label>Contraseña:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            {error && <p>{error}</p>}
            <button type="submit">Acceder</button>
        </form>
    );
}
 
export default LoginForm;