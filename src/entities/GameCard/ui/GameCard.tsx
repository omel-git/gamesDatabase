import React, { type ReactElement } from 'react';
import { Card, CardContent, CardMedia, Skeleton, Typography } from '@mui/material';
import { type Game } from 'widgets/gameGrid/api/useGames';
import { getCropImageUrl } from 'entities/GameCard/model/getCropImageUrl';
import { CriticScore } from 'shared/ui/CriticScore';

interface Props {
  game: Game;
  isLoading: boolean;
}

export const GameCard = ({ game, isLoading }: Props): ReactElement => {
  return isLoading ? (
    <Skeleton variant="rectangular" width={210} height={118} />
  ) : (
    <Card sx={{ width: 300 }}>
      <CardMedia
        sx={{ height: 200 }}
        image={game.background_image != null ? getCropImageUrl(game.background_image) : ''}
        title={game.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {game.name}
        </Typography>
        <CriticScore score={game.metacritic} />
      </CardContent>
    </Card>
  );
};
