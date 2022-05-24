import React from 'react';

type CardFooterProps = {
  level: string;
  school: string;
};

const CardFooter = ({ level, school }: CardFooterProps) => (
  <div>{`${level} ${school}`}</div>
);

export default CardFooter;
