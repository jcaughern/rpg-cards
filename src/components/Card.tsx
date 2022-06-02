import React from 'react';
import { jsx, css, useTheme, Theme } from '@emotion/react';
import CardHeader from './CardHeader';
import CardBody from './CardBody';
import CardFooter from './CardFooter';
import type { Spell } from '../types';

type CardProps = {
  spell: Spell;
};

const Card = ({ spell }: CardProps) => {
  const { desc, school, level } = spell;
  const theme = useTheme();
  const cardFrameStyle = css({
    backgroundColor: theme.cardColors[school as keyof Theme['cardColors']],
  });

  return (
    <div className="card" css={cardFrameStyle}>
      <CardHeader spell={spell} />
      <CardBody desc={desc} />
      <CardFooter school={school} level={level} />
    </div>
  );
};

export default Card;
