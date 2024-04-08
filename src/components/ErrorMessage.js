import React from 'react';
import '../styles/errorStyles.css';

const ErrorMensaje = ({ mensaje, limpiarError }) => {
  if (!mensaje) return null; // No renderizar si no hay mensaje

  return (
    <div className='error-div' onClick={limpiarError}>
      {mensaje}
    </div>
  );
};

export default ErrorMensaje;
