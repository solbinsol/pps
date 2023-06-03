import logo from './logo.svg';
import './App.css';
import PPS from './PPS';

import { BrowserRouter, Router ,Route,Routes} from 'react-router-dom';
import DetailView from "./Detail"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PPS />} />
          <Route path="/detail" element={<DetailView />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
