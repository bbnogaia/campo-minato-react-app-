import React from 'react';
import {useState} from 'react';
import './App.css';
import Griglia from './Griglia';
import Configurazione from './Configurazione';
import Conteggio from './Conteggio';

function App() {

  const [dimensione, setDimensione] = useState(0);
  const [passi, setPassi] = useState(0);
  const [punti, setPunti] = useState(0);
  const [percosiCompletati, setPercorsiCompletati] = useState(0);
  const [percosiNonCompletati, setPercorsiNonCompletati] = useState(0);
  const [griglia, setGriglia] = useState([]);
  const [initizalPassi, setInitialPassi] = useState(0);


  const dimChange = (event) => {
    var dimension = event.target.value;
    setDimensione(dimension);
    if(passi !== 0){
      inizializzaGriglia();
    }
  };

  const passiChange = (event) => {
    var steps = event.target.value;
    setPassi(steps);
    setInitialPassi(steps);
    if(dimensione !== 0){
      inizializzaGriglia();
    }
  };

  const inizializzaGriglia = () => {
     //creazione di una matrice 2D di dimensioni 'dimensione x dimensione'
     const nuovaGriglia = Array.from({ length: dimensione }, () =>
     Array.from({ length: dimensione }, () => "")
   );

   //impostazione di una cella casuale come "vincente" e di due celle "mina"
   //const rigaVincente = Math.floor(Math.random() * dimensione);
   //const colonnaVincente = Math.floor(Math.random() * dimensione);
   //nuovaGriglia[rigaVincente][colonnaVincente] = "vincente";

   for(var i = 0; i < dimensione; i++){
    for (var j = 0; j < 2; j++){
      var indexCella = Math.floor(Math.random() * dimensione);
      //while (nuovaGriglia[i][indexCella] === "vincente"){
      //  indexCella = Math.floor(Math.random() * dimensione);
      //}
      nuovaGriglia[i][indexCella] = "mina";
    }
   }

   setGriglia(nuovaGriglia);
  }

  const checkCella = (cellaValue, rowIndex, colIndex, aggiornaStatoGriglia) => {
    var passiDaFare = passi;
    passiDaFare--;
    setPassi(passiDaFare);

    var punteggio = punti;

    if(cellaValue === "mina"){
      var percorsiNonComp = percosiNonCompletati;
      percorsiNonComp++;
      setPercorsiNonCompletati(percorsiNonComp);
      aggiornaStatoGriglia(rowIndex, colIndex, true); //true indica che è una mina
      alert("partita terminata: percorso non completato!");
      setPassi(initizalPassi);
      inizializzaGriglia();
    }
    if(cellaValue === ""){
      punteggio += 5;
      aggiornaStatoGriglia(rowIndex, colIndex, false); // false indica che è una casella normale
    }
    if(passi === 0){
      var percorsiCom = percosiCompletati;
      percorsiCom++;
      setPercorsiCompletati(percorsiCom);
      alert("partita terminata: percorso completato!");
      inizializzaGriglia();
    }

    setPunti(punteggio);
  }

  return (
    <div className="App">
      <h1>benvenuto a Campo Minato!</h1>
      <Configurazione dimChange={dimChange} passiChange={passiChange}></Configurazione>
      <Griglia griglia={griglia} checkCella={checkCella}></Griglia>
      <Conteggio punti={punti} percosiCompletati={percosiCompletati} percosiNonCompletati={percosiNonCompletati}></Conteggio>
    </div>
  );
}

export default App;
