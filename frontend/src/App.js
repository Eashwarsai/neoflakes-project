import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AttractiveForm from './webpage1';
import Header from './header';
import MediaList from './webpage2';
import Player from './webpage3';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route exact path="/" element={<AttractiveForm/>} />
        <Route exact path="/show" element={<MediaList/>} />
        <Route exact path="/player" element={<Player/>} />
      </Routes>
    </Router>
  );
}

export default App;
