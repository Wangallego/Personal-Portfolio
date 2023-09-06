import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Articles from './components/Articles';

export default function App() {
  return (
    <Router>
      <div className='font-mono overflow-hidden'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/articles' element={<Articles />} />
        </Routes>
      </div>
    </Router>
  );
}

