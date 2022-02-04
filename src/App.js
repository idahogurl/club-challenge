import './App.css';

import { Routes, Route } from "react-router-dom";
import { Header } from './Components/Header';
import { QRCode } from './Components/QRCode';
import { SubHeader } from './Components/SubHeader';
import { Dashboard } from './Components/Dashboard';

function App() {
  return (
    <div className="App">
      <Header />
      <SubHeader />
      <Routes>
        <Route index path="/" element={<QRCode value="https://www.equinox.com/referrals/003A000001TG2TjIAL" />} />
        <Route path="dash" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
