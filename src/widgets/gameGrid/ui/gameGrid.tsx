import React, { type ReactElement } from 'react';
import { type Game, useGames } from 'widgets/gameGrid/api/useGames';
import { GameCard } from 'entities/GameCard';
import Grid2 from '@mui/material/Unstable_Grid2';
import { GameCardSkeleton } from 'entities/GameCardSkeleton';

export const GameGrid = (): ReactElement => {
  const { gamesList, isLoading } = useGames();

  return (
    <Grid2 container spacing={5}>
      {isLoading
        ? Array.from(new Array(20)).map((_, index: number) => {
            return <GameCardSkeleton key={index} />;
          })
        : gamesList.map((game: Game, index: number) => {
            return <GameCard game={game} isLoading={isLoading} key={index} />;
          })}
    </Grid2>
  );
};
