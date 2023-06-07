import { memo } from 'react';
import './styles/index.scss';

const App = memo(() => {
  return (
    <div id='app' className={'app'}>
      Hello
    </div>
  );
});

export default App;
