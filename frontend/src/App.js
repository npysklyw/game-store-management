import './App.css';

import Home from './sites/home.js';
import Insert from './sites/insert';
import View from './sites/view.js';
import {Routes,
  Route} from 'react-router-dom'
import AccHome from './sites/accounting';
import Recommend from './Recommend/Recommend.js';

function App() {
  return (
    <div className="App">
      
      

      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="insert" element={<Insert/>} />
      <Route path="view" element={<View/>} />
      <Route path="accounting" element={<AccHome/>} />
      <Route path="recommend" element={<Recommend/>} />
      </Routes>
    </div>

  );
}

export default App;
