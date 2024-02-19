import './styles/index.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { type ReactElement } from 'react';

function App(): ReactElement {
  return <div className={classNames('App')}>Wake up, Neo...</div>;
}

export default App;
