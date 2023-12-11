import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/CertificateRequest.css';
import Navbar from '../UserNavbar';

function Certificates() {
  const userEmail = localStorage.getItem('email'); // Get the user's email from localStorage
  console.log('User Email:', userEmail);
  const [name, setName] = useState('');
  const [reason, setReason] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [fileUrl, setFileUrl] = useState('');

  useEffect(() => {
    const fetchFile = async () => {
      try {
        const response = await axios.get('/api/getFile', { responseType: 'blob' });
        if (response.headers['content-type'] === 'application/pdf') {
          const url = window.URL.createObjectURL(new Blob([response.data]));
          setFileUrl(url);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchFile();
  }, []);

  useEffect(() => {
    const checkRequestStatus = async () => {
      try {
        const response = await axios.get('/api/checkRequestStatus');
        if (response.data.approved && response.data.sentFile) {
          setSuccessMessage('Your request has been approved and the file has been sent.');
        } else if (response.data.approved) {
          setSuccessMessage('Your request has been approved.');
        } else {
          setSuccessMessage('');
        }
      } catch (error) {
        setErrorMessage(error.response.data.message);
      }
    };

    checkRequestStatus();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const requestData = {
        name,
        reason,
        email: userEmail, // Use the email from localStorage
      };

      const response = await axios.post('/api/certificateRequests', requestData);

      setSuccessMessage(response.data.message);
      setName('');
      setReason('');
    } catch (error) {
      setErrorMessage(error.response.data.message);
    }
  };

  return (
    <>
      <Navbar />
      <div className="certificates">
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </label>
          <label>
            Email:
            <input type="text" value={userEmail} readOnly />
          </label>
          <label>
            Reason for Certificate:
            <textarea value={reason} onChange={(e) => setReason(e.target.value)} />
          </label>
          <button type="submit">Send Request</button>
        </form>
        {successMessage && <p>{successMessage}</p>}
        {errorMessage && <p>{errorMessage}</p>}
        {fileUrl && (
          <div>
            <h3>Received File</h3>
            <a href={fileUrl} download>
              Download File
            </a>
          </div>
        )}
      </div>
    </>
  );
}

export default Certificates;
