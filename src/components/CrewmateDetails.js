import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import supabase from '../supabaseClient';
import './CrewmateDetails.css';

function CrewmateDetails() {
  const { id } = useParams();
  const [crewmate, setCrewmate] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCrewmate();
  }, [id]);

  const fetchCrewmate = async () => {
    const { data } = await supabase.from('crewmates').select('*').eq('id', id).single();
    setCrewmate(data);
  };

  const handleDelete = async () => {
    await supabase.from('crewmates').delete().eq('id', id);
    navigate('/gallery');
  };

  return (
    <div className="crewmate-details">
      {crewmate ? (
        <div className="crewmate-card">
          <img src={`/images/${crewmate.color}.png`} alt={crewmate.name} />
          <h1>{crewmate.name}</h1>
          <p>Speed: {crewmate.speed}</p>
          <p>Color: {crewmate.color}</p>
          <div className="button-container">
          <Link to={`/update/${crewmate.id}`} className="update-button">Update Crewmate</Link>
          <button onClick={handleDelete} className="delete-button">Delete Crewmate</button>
          </div>
          
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default CrewmateDetails;