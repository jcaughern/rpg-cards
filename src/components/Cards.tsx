import React, { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import Card from './Card';
import type { Spell } from '../types';

type CardProps = {
  spells: Spell[];
};

const Cards = ({ spells }: CardProps) => {
  const [viewWidth, setViewWidth] = useState(window.innerWidth);

  const getWidth = (): number =>
    Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setViewWidth(getWidth());
    });
    return () => {
      window.removeEventListener('resize', () => setViewWidth(getWidth()));
    };
  }, [viewWidth]);

  const containerWidth =
    15 + Math.ceil(0.75 * viewWidth - ((0.75 * viewWidth) % 300));

  const containerStyle = css({
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: containerWidth,
    maxWidth: '75vw',
  });

  let spellCards;
  if (spells) {
    spellCards =
      spells &&
      spells.map((spell: Spell) => <Card spell={spell} key={spell.slug} />);
  }

  return (
    <div css={containerStyle} id="cardContainer">
      {spellCards}
    </div>
  );
};

export default Cards;
