import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import supabase from '../supabaseClient';
import './Home.css';

function Home() {
  return (
    <div className="Home">
      <h1>Crewmates Application Creator!!</h1>
      <p> Here is You Where You Can Create Your Own Crew To Land Them into Space</p>
    </div>
  );
}

export default Home;