import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import Blog from './components/pages/Blog';
import Gallery from './components/pages/Gallery';
import Missions from './components/pages/Missions';
import Podcasts from './components/pages/Podcasts';
import Admin from './components/pages/Admin';
import './App.css';


const Topmenu = React.lazy(() => import('./components/Topmenu'));
const Footer = React.lazy(() => import('./components/Footer'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <div className='flex flex-col'>
          <Topmenu/>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/missions" element={<Missions />} />
            <Route path="/podcasts" element={<Podcasts />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
          <Footer/>
        </div>
      </Suspense>
    </Router>
  );
}

export default App;
