import React from 'react';
import Card from './Card';
import type { Spell } from '../types';

type CardProps = {
  spells: Spell[];
};

const Cards = ({ spells }: CardProps) => {
  let spellCards;
  if (spells) {
    spellCards =
      spells &&
      spells.map((spell: Spell) => <Card spell={spell} key={spell.slug} />);
  }

  return <div id="cardContainer">{spellCards}</div>;
};

export default Cards;
