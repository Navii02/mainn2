import React from 'react';
import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../styles/Home.css'; // Import the CSS file

const HomePage = () => {

  const Navigate = useNavigate(); // Initialize Navigate

  const redirectToLogin = (role) => {
    Navigate(`/login?role=${role}`); // Use Navigate to change the route
  };

  const roles = [
    'student',
    'officer',
    'staff',
    'class-tutor',
    'hod',
    'principal',
    'admin',
  ];

  return (
    <div className="office-home-page">
      <h1>Welcome to the Office</h1>
      <h6>Who are You?</h6>
      <div className="button-container">
        <div className="tabs">
          {roles.map((role) => (
            <button
              key={role}
              className={roles.indexOf(role) % 2 === 0 ? 'btn' : 'btn1'}
              onClick={() => redirectToLogin(role)}
            >
              {role.charAt(0).toUpperCase() + role.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
