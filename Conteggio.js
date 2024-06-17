import React from 'react';

function Conteggio({punti, percosiCompletati, percosiNonCompletati}) {
  return (
    <div className="Conteggio">
      <p>percorsi completati: {percosiCompletati} </p>
      <p>percorsi non completati: {percosiNonCompletati} </p>
      <p>punteggio totale: {punti}</p>
    </div>
  );
}

export default Conteggio;