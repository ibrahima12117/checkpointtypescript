// src/App.tsx
import React from 'react';
import './App.css';
import { Voiture } from './voiture';

const App: React.FC = () => {
  const maVoiture = new Voiture('Toyota', 'Corolla', 2020);
  maVoiture.start();

  return (
    <div className="App">
      <h1>{maVoiture.make} {maVoiture.model}</h1>
      <p>Year: {maVoiture.year}</p>
    </div>
  );
};

export default App;
