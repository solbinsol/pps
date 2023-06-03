
import './App.css';
import PPS from './PPS';

import { BrowserRouter ,Route,Routes} from 'react-router-dom';
import ReedME from "./Detail"
import ReedMETwo from "./Detail2"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PPS />} />
          <Route path="/photoreedme" element={<ReedME />} />
          <Route path="/onoreedme" element={<ReedMETwo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
