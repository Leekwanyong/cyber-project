import { Global } from '@emotion/react';
import globalStyles from './styles/globalStyles';

function App() {
  return (
    <div>
      <Global styles={globalStyles} />
    </div>
  );
}

export default App;
