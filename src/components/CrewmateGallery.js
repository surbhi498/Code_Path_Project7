import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import supabase from '../supabaseClient';
import './CrewmateGallery.css';

function CrewmateGallery() {
  const [crewmates, setCrewmates] = useState([]);

  useEffect(() => {
    fetchCrewmates();
  }, []);

  const fetchCrewmates = async () => {
    const { data, error } = await supabase.from('crewmates').select('*');
    if (error) {
      console.error('Error fetching crewmates:', error);
    } else {
      setCrewmates(data || []);
    }
  };

  return (
    <div className="crewmate-gallery">
      <h1>Crewmate Gallery</h1>
      <div className="gallery">
        {crewmates.map(crewmate => (
          <div key={crewmate.id} className="crewmate-card">
            <img src={`/images/${crewmate.color}.png`} alt={crewmate.name} />
            <h2>{crewmate.name}</h2>
            <p>Speed: {crewmate.speed}</p>
            <p>Color: {crewmate.color}</p>
            <Link to={`/crewmate/${crewmate.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CrewmateGallery;