import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Books';
import Categories from './Categories';

const App = () => (
  <>
    <Pageheader />
    <main className="main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="categories" element={<Categories />} />
      </Routes>
    </main>
  </>
);

export default App;
