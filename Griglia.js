import React from 'react';
import {useState} from 'react';

function Griglia({griglia, checkCella}) {

    /*const [statoGriglia, setStatoGriglia] = useState(griglia.map(riga => riga.map(() => ({ backgroundColor: 'white' }))));

    const aggiornaStatoGriglia = (rowIndex, colIndex, isMina) => {
        setStatoGriglia(prevState => {
          const newState = [...prevState];
          if (!Array.isArray(newState[rowIndex])) {
            newState[rowIndex] = [];
          }
          newState[rowIndex][colIndex] = { backgroundColor: isMina ? 'red' : 'gray' };
          return newState;
        });
      };
*/

function aggiornaColore (cella, rowIndex, colIndex){
    if(cella === "mina"){
        document.getElementById(`cella_${rowIndex}_${colIndex}`).style.backgroundColor = "red";
    } if (cella === ""){
        document.getElementById(`cella_${rowIndex}_${colIndex}`).style.backgroundColor = "gray";
    }
}

  return (
    <div className="Griglia">
      {griglia.map((riga, rowIndex) => (
        <div key={rowIndex} className="riga">
          {riga.map((cella, colIndex) => (
            <div 
            key={colIndex} 
            id={`cella_${rowIndex}_${colIndex}`}
            className="cella" 
            onClick={() => {checkCella(cella, rowIndex, colIndex, () => aggiornaColore(cella, rowIndex, colIndex))}}
            style={{
                width: '50px',
                height: '50px',
                border: '1px solid #ccc',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                backgroundColor: 'white', //colore di sfondo predefinito
              }}>
                cella
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Griglia;