import React from 'react';
import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Previas } from '../pages/previas/previas';
import { Reembolsos } from '../pages/reembolsos/Reembolsos';

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Reembolsos />} />
          <Route path="previas" element={<Previas />} />
        </Route>
      </Routes>
    </Router>
  );
};
