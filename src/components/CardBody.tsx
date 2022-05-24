import React from 'react';

type CardBodyProps = {
  desc: string;
};

const CardBody = ({ desc }: CardBodyProps) => (
  <div className="cardBody">{desc}</div>
);

export default CardBody;
