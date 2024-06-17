import React from 'react';

function Configurazione({passiChange, dimChange}) {
  return (
    <div className="Configurazione">
        <p>inserisci la dimensione della griglia di gioco: </p>
        <input type="text" id="dim" onChange={(event) => dimChange(event)}></input>
        <p>inserisci il numero di passi che vuoi effettuare</p>
        <input type="text" id="passi" onChange={(event) => passiChange(event)}></input><br></br><br></br>
    </div>
  );
}

export default Configurazione;