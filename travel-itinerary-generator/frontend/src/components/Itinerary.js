import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
    max-width: 600px;
    margin: auto;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    background-color: white;
`;

const Itinerary = () => {
    const [destination, setDestination] = useState('');
    const [activities, setActivities] = useState('');

    const saveItinerary = async () => {
        const token = localStorage.getItem('token');
        const userId = 'user_id_here'; // Replace with actual user ID after login
        await axios.post('http://localhost:5000/api/itineraries', {
            userId,
            destination,
            activities: activities.split(','),
        }, {
            headers: { Authorization: `Bearer ${token}` }
        });
        alert('Itinerary created successfully');
    };

    return (
        <Container>
            <h1>Create Itinerary</h1>
            <input type="text" placeholder="Destination" onChange={(e) => setDestination(e.target.value)} />
            <textarea placeholder="Activities (comma separated)" onChange={(e) => setActivities(e.target.value)} />
            <button onClick={saveItinerary}>Save Itinerary</button>
        </Container>
    );
};

export default Itinerary;
