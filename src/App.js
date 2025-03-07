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
           `Wszystkiego najlepszego z okazji Dnia Kobiet! Cały team MASH życzy:`, // Types 'One'
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
           2700,
           1000,
           'Jirek do logowania czasu', // Deletes 'One' and types 'Two'
           1000,
           'HR-u, który nie zapomni o podwyżkach! 💸', 
           1000, 
           'Kawy, która nigdy się nie kończy! ☕', 
           1000,
           `Sprintów kończących się zgodnie z planem! 📆,`,
           1000,
           'Jiry, w której taski magicznie znikają! 🎩', 
           1000, 
           'Merge’ów bez konfliktów! 🤝', 
           1000, 
           'Laptopa, który nigdy się nie aktualizuje w złym momencie! 💻', 
           1000,  
           'Płatności za nadgodziny... 404 Not Found 😅', 
           1000,
           'Kodu pisanego z klasą, jak nasze dziewczyny! 👩‍💻✨',
           1000,
           'Merge conflict? Nie między nami! ❤️',
           1000,
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
