import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import routing components
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Footer from './components/Footer'; // Import Footer component
import About from './components/About'; // Assume you have an About page component

import Dashboard from './components/Dashboard'; // Import the Dashboard component
import Settings from './components/Settings';
import Blog1 from './components/Blog1';
import Blog2 from './components/Blog2';
import Framework from './components/Framework';
import Analysis from './components/Analysis';
import LM from './components/LM';
import Intro from './components/Intro';



function App() {
  return (
    <Router> {/* Wrap the app with Router to enable routing */}
      <div className="flex h-screen flex-col">
        <div className="flex flex-1">
          <Sidebar /> {/* Sidebar on the left */}
          <div className="flex flex-col flex-1">
            <Header /> {/* Header on top */}
            <main className="flex-1 p-4 bg-gray-100">
              <Routes>
                {/* Define your Routes here */}
                <Route path="/" element={<Dashboard />} /> {/* Dashboard route */}
                <Route path="/about" element={<About />} /> {/* About route */}
                <Route path='/settings' element={<Settings/>}/>
                <Route path='/Blog1' element={<Blog1/>}/>
                <Route path='/Blog2' element={<Blog2/>}/>
                <Route path='/framework' element={<Framework/>}/>
                <Route path='/analysis' element={<Analysis/>}/>
                <Route path='/lm' element={<LM/>}/>
                <Route path='/intro' element={<Intro/>}/>
              </Routes>
            </main>
          </div>
        </div>
        <Footer /> {/* Footer at the bottom */}
      </div>
    </Router>
  );
}

export default App;
