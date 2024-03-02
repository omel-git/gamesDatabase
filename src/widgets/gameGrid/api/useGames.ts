import useFetch from 'shared/hooks/useFetch';

export interface Game {
  id: number;
  slug: string;
  name: string;
  released?: string;
  tba?: boolean;
  background_image?: string;
  rating: number;
  rating_top?: number;
  ratings?: object;
  ratings_count?: number;
  reviews_text_count?: string;
  added?: number;
  added_by_status?: object;
  metacritic: number;
  playtime?: number;
  suggestions_count?: number;
  updated?: string;
  esrb_rating?: {
    id: number;
    slug?: string;
    name?: string;
  } | null;
  platforms?: [
    {
      platform?: {
        id: number;
        slug?: string;
        name?: string;
      };
      released_at?: string | null;
      requirements?: {
        minimum?: string;
        recommended?: string;
      } | null;
    },
  ];
}

interface GameResponse {
  count: number;
  next?: string;
  previous?: string;
  results: Game[] | [];
}

interface useGamesResponse {
  gamesList: Game[] | [];
  isLoading: boolean;
}

export const useGames = (): useGamesResponse => {
  const { data, isLoading } = useFetch<GameResponse>({
    url: 'https://api.rawg.io/api/games?key=8f76966e19f64f9b828f2d27266771b4',
  });
  return { gamesList: data?.results ?? [], isLoading };
};
