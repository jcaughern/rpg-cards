import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import testData from './testData';
import Card from './components/Cards';

const App = () => {
  const [spells, setSpells] = useState([]);

  useEffect(() => {
    setSpells(JSON.parse(testData).results);
  }, []);

  return (
    <div className="App">
      <header>
        <h1>RPG Cards</h1>
      </header>
      {spells && <Card spells={spells} />}
    </div>
  );
};

export default App;
