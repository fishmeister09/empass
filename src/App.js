import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import './App.css';

function App() {
  const [login, setLogin] = useState(false);
  return !login ? <Login setLogin={setLogin} /> : <Dashboard />;
}

export default App;
