import React, { useState, useEffect } from 'react';
import './fonts/Nodesto Caps Condensed.otf';
import './fonts/NodestoCapsCondensed-Bold.otf';
import './fonts/Scaly Sans Caps Bold.otf';
import './App.css';
import { css, ThemeProvider } from '@emotion/react';
import { logoStyle } from './styles';
import Button from './components/shared/Button';
import theme from './theme';
import testData from './testData';
import Card from './components/Cards';
import CardMenu from './components/CardMenu';

const App = () => {
  const [spells, setSpells] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    setSpells(JSON.parse(testData).results);
  }, []);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <header className="glass">
          <Button
            selected={menuOpen}
            label={false}
            icon
            handleClick={handleMenuClick}
          />
          <span css={logoStyle}>
            RPG
            <em>Cards</em>
          </span>
        </header>
        {spells && <Card spells={spells} />}
        {menuOpen && <CardMenu />}
      </ThemeProvider>
    </div>
  );
};

export default App;
