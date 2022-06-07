import React from 'react';
import { css } from '@emotion/react';

const menuStyle = css({
  position: 'fixed',
  height: '80%',
  maxWidth: '90%',
  width: 275,
  zIndex: 10,
  overflowY: 'scroll',
  scrollbarWidth: 'none',
  '::-webkit-scrollbar': {
    display: 'none',
  },
  top: 54,
  left: 0,
});

const CardMenu = () => {
  return (
    <div id="cardMenu" className="glass" css={menuStyle}>
      Menu Stuff
    </div>
  );
};

export default CardMenu;
