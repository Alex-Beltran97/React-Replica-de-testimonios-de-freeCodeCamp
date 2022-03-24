import './App.css';
import data from './data';
import Testimonio from './components/Testimonio.js';
import React from 'react';

const testimonios = data.map(item=>{
  return(
  <React.Fragment key={item.name}>
  <Testimonio
  imagen={item.image}
  nombre={item.name}
  pais={item.country}
  cargo={item.position}
  empresa={item.company}
  testimonio={item.testimony}
  />
  </React.Fragment>
  ) 
})

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Here is what our alumni say about freeCodeCamp:</h1>
        {testimonios}
      </div>
    </div>
  );
}

export default App;
