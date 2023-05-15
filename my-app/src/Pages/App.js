import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Home/index'

function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Home />} > </Route>
        </Routes>
      </Router>
  );
}

export default App;
