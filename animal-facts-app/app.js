import { animals } from './animals';
import React from 'react';
import ReactDOM from 'react-dom';

function displayFact(e) {
  const index = e.target.alt;
  var fact = animals[index].facts;
  document.getElementById('fact').innerHTML = fact;
}
const title = "";
const background = <img className="background" alt="ocean" src="/images/ocean.jpg"/>;

var images = []
for (const animal in animals) {
  images.push(<img key={animal} className='animal' alt={animal} src={animals[animal].image} aria-label={animal} role='button' onClick={displayFact} />);
}

const animalFacts = (<div>
  <h1>{title === "" ? "Click an animal for a fun fact!" : title}</h1>
  {background}
  <p id="fact" style={{fontSize:'16px', color:'yellow'}}></p>
  <div className="animals">{images}</div>
</div>);

ReactDOM.render(animalFacts, document.getElementById('root'));