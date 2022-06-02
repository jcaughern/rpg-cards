import React, { useState, useEffect } from 'react';
import './fonts/Nodesto Caps Condensed.otf';
import './fonts/NodestoCapsCondensed-Bold.otf';
import './App.css';
import { ThemeProvider } from '@emotion/react';
import theme from './theme';
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
      <ThemeProvider theme={theme}>
        {spells && <Card spells={spells} />}
      </ThemeProvider>
    </div>
  );
};

export default App;
