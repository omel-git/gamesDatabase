import React, { type ReactElement } from 'react';
import { Card, Skeleton } from '@mui/material';

export const GameCardSkeleton = (): ReactElement => {
  return (
    <Card sx={{ width: 300 }}>
      <Skeleton variant="rounded" height={200} />
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
      <Skeleton variant="circular" width={40} height={40} />
    </Card>
  );
};
