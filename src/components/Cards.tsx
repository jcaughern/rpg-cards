import React from 'react';
import CardHeader from './CardHeader';
import CardBody from './CardBody';
import CardFooter from './CardFooter';
import type { Spell } from '../types';

type CardProps = {
  spells: Spell[];
};

const Cards = ({ spells }: CardProps) => {
  let spellCards;
  if (spells) {
    spellCards =
      spells &&
      spells.map((spell: Spell) => (
        <div className="card">
          <CardHeader spell={spell} key={spell.slug} />
          <CardBody desc={spell.desc} />
          <CardFooter school={spell.school} level={spell.level} />
        </div>
      ));
  }

  return <div id="cardContainer">{spellCards}</div>;
};

export default Cards;
