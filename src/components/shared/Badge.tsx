import React from 'react';
import { css } from '@emotion/react';

type BadgeProps = {
  color: string;
  letter: string;
};

const Badge = ({ color, letter }: BadgeProps) => {
  const badgeStyle = css({
    display: 'flex',
    backgroundColor: color,
    color: 'white',
    height: '2rem',
    width: '2rem',
    borderRadius: '50%',
    fontFace: 'ScalySansBold',
  });

  return <div css={badgeStyle}>{letter}</div>;
};

export default Badge;
