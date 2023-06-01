import './App.css'
import Card from './components/Card'
import React, { useState } from 'react';

function App() {
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [showCard, setShowCard] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (name.trim().length < 3 || name.trim().startsWith(' ')) {
      alert('Por favor chequea que la información sea correcta');
      setName(''); 
      setEmail(''); 
      return;
    }

    if (email.trim().length < 6) {
      alert('Por favor chequea que la información sea correcta');
      setEmail(''); 
      return;
    }

    console.log('Name:', name);
    console.log('Email:', email);

    setShowCard(true);
    setError('');

  };

  return (
    <>
      <div className='App'>
        <h1>Carga de alumnos</h1>
        {error && <p>{error}</p>}
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Nombre:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit">Enviar</button>
        </form>
        {showCard && <Card name={name} email={email} />}
      </div>
    </>
  )
}

export default App
