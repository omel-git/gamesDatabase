import './styles/index.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { type ReactElement } from 'react';
import { GameGrid } from 'widgets/gameGrid';

function App(): ReactElement {
  return <GameGrid></GameGrid>;
}

export default App;
