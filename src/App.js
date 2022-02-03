import './App.css';

import { Header } from './Components/Header';
import { QRCode } from './Components/QRCode';

function App() {
  return (
    <div className="App">
      <Header />
      <QRCode value="https://www.equinox.com/referrals/003A000001TG2TjIAL" />
    </div>
  );
}

export default App;
