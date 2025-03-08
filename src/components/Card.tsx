import React from 'react';
import { css, useTheme, Theme } from '@emotion/react';
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

  function isInThemeProperty<K extends keyof Theme, T extends keyof Theme[K]>(
    val: unknown,
    property: K,
  ): val is T {
    const castVal = val as T;
    return theme[property][castVal] !== undefined;
  }

  const cardColor = isInThemeProperty(school, 'cardColors')
    ? theme.cardColors[school]
    : theme.cardColors.default;

  const cardFrameStyle = css({
    backgroundColor: cardColor,
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
