import React, { type ReactElement } from 'react';
import { Chip } from '@mui/material';

interface Props {
  score: number;
}

export const CriticScore = ({ score }: Props): ReactElement => {
  const color = score > 75 ? 'success' : score > 55 ? 'warning' : 'error';
  return <Chip label={score} color={color}></Chip>;
};
