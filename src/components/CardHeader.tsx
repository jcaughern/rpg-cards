/* eslint-disable camelcase */
import React from 'react';
import type { Spell } from '../types';

type CardHeaderProps = {
  spell: Spell;
};

const CardHeader = ({ spell }: CardHeaderProps) => {
  const { name, casting_time, range, components, duration } = spell;
  return (
    <div className="cardHeader">
      <h2>{name}</h2>
      <div className="cardHeaderTop">
        <div>
          <h4>Casting Time</h4>
          <h5>{casting_time}</h5>
        </div>
        <div>
          <h4>Range</h4>
          <h5>{range}</h5>
        </div>
      </div>
      <div className="cardHeaderBottom">
        <div>
          <h4>Components</h4>
          <h5>{components}</h5>
        </div>
        <div>
          <h4>Duration</h4>
          <h5>{duration}</h5>
        </div>
      </div>
    </div>
  );
};

export default CardHeader;
