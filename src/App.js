import './App.css';

import { Header } from './Components/Header';
import { QRCode } from './Components/QRCode';
import { Dashboard } from './Components/Dashboard';

function App() {
  return (
    <div className="App">
      {/* Commening header until we support mobile devices */}
      {/* <Header /> */}
      <QRCode value="https://www.equinox.com/referrals/003A000001TG2TjIAL" />
      <Dashboard />
    </div>
  );
}

export default App;
