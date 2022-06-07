/* eslint-disable camelcase */
import React from 'react';
import { css } from '@emotion/react';
import { headingStyle, contentStyle } from '../styles';
import type { Spell } from '../types';

type CardHeaderProps = {
  spell: Spell;
};

const CardHeader = ({ spell }: CardHeaderProps) => {
  const { name, casting_time, range, components, duration } = spell;
  return (
    <div className="cardHeader">
      <div className="spellName">
        <h2>{name}</h2>
      </div>
      <div className="cardHeaderRow">
        <div css={css({ marginRight: '1px' })} className="cardHeaderCol">
          <h4 css={headingStyle}>Casting Time</h4>
          <h5 css={contentStyle}>{casting_time}</h5>
        </div>
        <div css={css({ marginLeft: '1px' })} className="cardHeaderCol">
          <h4 css={headingStyle}>Range</h4>
          <h5 css={contentStyle}>{range}</h5>
        </div>
      </div>
      <div className="cardHeaderRow">
        <div css={css({ marginRight: '1px' })} className="cardHeaderCol">
          <h4 css={headingStyle}>Components</h4>
          <h5 css={contentStyle}>{components}</h5>
        </div>
        <div css={css({ marginLeft: '1px' })} className="cardHeaderCol">
          <h4 css={headingStyle}>Duration</h4>
          <h5 css={contentStyle}>{duration}</h5>
        </div>
      </div>
    </div>
  );
};

export default CardHeader;
