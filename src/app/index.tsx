import { memo } from 'react';

import './styles/index.scss';
import { PaymentPage } from '@/pages/PaymentPage';

const App = memo(() => {
  return (
    <div id='app' className={'app'}>
      <PaymentPage />
    </div>
  );
});

export default App;
