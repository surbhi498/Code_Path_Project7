import React, { useState } from 'react';
import supabase from '../supabaseClient';
import './CreateCrewmate.css';

function CreateCrewmate() {
  const [name, setName] = useState('');
  const [speed, setSpeed] = useState('');
  const [color, setColor] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error } = await supabase.from('crewmates').insert([{ name, speed, color }]);
    if (error) {
      console.error('Error creating crewmate:', error);
    } else {
      setName('');
      setSpeed('');
      setColor('');
    }
  };

  return (
    <div className="create-crewmate">
      <h1>Create a Crewmate</h1>
      <form onSubmit={handleSubmit}>
        <div className="cards-container">
          <div className="card">
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="card">
            <label>Speed:</label>
            <input
              type="text"
              value={speed}
              onChange={(e) => setSpeed(e.target.value)}
            />
          </div>
          <div className="card">
            <label>Color:</label>
            <div className="color-options">
              <label>
                <input
                  type="radio"
                  value="red"
                  checked={color === 'red'}
                  onChange={(e) => setColor(e.target.value)}
                />
                Red
              </label>
              <label>
                <input
                  type="radio"
                  value="blue"
                  checked={color === 'blue'}
                  onChange={(e) => setColor(e.target.value)}
                />
                Blue
              </label>
              <label>
                <input
                  type="radio"
                  value="green"
                  checked={color === 'green'}
                  onChange={(e) => setColor(e.target.value)}
                />
                Green
              </label>
              {/* Add more colors as needed */}
            </div>
          </div>
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default CreateCrewmate;