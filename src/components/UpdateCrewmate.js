import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import supabase from '../supabaseClient';
import './UpdateCrewmate.css';

function UpdateCrewmate() {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [speed, setSpeed] = useState('');
  const [color, setColor] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchCrewmate();
  }, [id]);

  const fetchCrewmate = async () => {
    const { data } = await supabase.from('crewmates').select('*').eq('id', id).single();
    setName(data.name);
    setSpeed(data.speed);
    setColor(data.color);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await supabase.from('crewmates').update({ name, speed, color }).eq('id', id);
    navigate('/gallery');
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
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default UpdateCrewmate;