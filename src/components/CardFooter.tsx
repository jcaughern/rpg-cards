import React from 'react';

type CardFooterProps = {
  level: string;
  school: string;
};

const CardFooter = ({ level, school }: CardFooterProps) => (
  <footer className="cardFooter">
    {level === 'Cantrip' ? `${school} ${level}` : `${level} ${school}`}
  </footer>
);

export default CardFooter;
