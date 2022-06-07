import React, { MouseEventHandler } from 'react';
import { css } from '@emotion/react';
import { GiHamburgerMenu } from 'react-icons/gi';

type ButtonProps = {
  selected: boolean;
  icon: boolean;
  label: string | boolean;
  handleClick: MouseEventHandler;
};

const Button = ({ selected, icon, label, handleClick }: ButtonProps) => {
  const buttonStyle = css({
    display: 'flex',
    alignContent: 'center',
    color: 'white',
    backgroundColor: selected ? 'rgba(255, 255, 255, 0.25)' : 'transparent',
    border: 'none',
    span: {
      fontSize: '1rem',
      margin: 15,
    },
    svg: {
      height: '40px',
      width: '40px',
      margin: 5,
    },
    ':hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      transition: 'background-color 0.4s',
    },
  });
  return (
    <button type="button" css={buttonStyle} onClick={handleClick}>
      {icon && <GiHamburgerMenu />}
      {label && <span>{label}</span>}
    </button>
  );
};

export default Button;
