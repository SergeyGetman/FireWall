import React, { FC } from 'react';
import { Button } from '@mui/material';
import { IButtonProps } from '../../types';

export const ButtonElement: FC<IButtonProps> = ({ text, handleClick, variant }) => {
  return (
    <>
      <Button variant={variant} onClick={handleClick}>
        {text}
      </Button>
    </>
  );
};

export default Button;
