import logo from './logo.svg';
import React, { useEffect, useState } from "react";
import { TypeAnimation } from 'react-type-animation';
import './App.css';

function App() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        { !isClicked &&
          <button className='button-50' onClick={() =>setIsClicked(true)}>Kliknij tutaj !</button>
        }
        { isClicked &&
        <>
         <TypeAnimation
         sequence={[
           `Wszystkiego najlepszego z okazji dnia kobiet! Cały team MASH życzy:`, // Types 'One'
           1000, // Waits 1s
           () => {
             console.log('Done typing!'); // Place optional callbacks anywhere in the array
           }
         ]}
         wrapper="div"
         cursor={false}
         repeat={0}
         style={{ fontSize: '1.5em' }}
       />
       <TypeAnimation
         sequence={[
          ``, // Types 'One'
           2700, // Waits 1s
           1000, // Waits 1s
           'Jirek do logowania czasu', // Deletes 'One' and types 'Two'
           2000, // Waits 2s
           'HR-u, który nie zapomni o podwyżkach! 💸', 
           2000, 
           'Kawy, która nigdy się nie kończy! ☕', 
           2000,
           `Sprintów kończących się zgodnie z planem! 📆,`,
           2000, // Waits 2s
           'Jiry, w której taski magicznie znikają! 🎩', 
           2000, 
           'Merge’ów bez konfliktów! 🤝', 
           2000, 
           'Laptopa, który nigdy się nie aktualizuje w złym momencie! 💻', 
           2000,  
           'Płatności za nadgodziny... 404 Not Found 😅', 
           2000, // Waits 2s
           'Kodu pisanego z klasą, jak nasze dziewczyny! 👩‍💻✨',
           2000, // Waits 2s
           'Merge conflict? Nie między nami! ❤️',
           2000, // Waits 2s
           'Przełożony i deadline uwzględniają refaktor i przerwy na ciasto 🎂', 
           2000, // Waits 2s
           () => {
             console.log('Done typing!'); // Place optional callbacks anywhere in the array
           }
         ]}
         wrapper="div"
         cursor={false}
         repeat={Infinity}
         style={{ fontSize: '1.5em' }}
       />
       </>
        }
      </header>
    </div>
  );
}

export default App;
