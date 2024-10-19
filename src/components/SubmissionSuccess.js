// src/SubmissionSuccess.js
import React from 'react';
import { useLocation } from 'react-router-dom';

const SubmissionSuccess = () => {
  const { state } = useLocation();
  const { formData } = state || { formData: {} };

  return (
    <div className="text-center success-section">
      <h2>Thank you, {formData.name}!</h2>
      <p>Your message has been successfully sent.</p>
      <p><strong>Email:</strong> {formData.email}</p>
      <p><strong>Message:</strong> {formData.message}</p>
    </div>
  );
};

export default SubmissionSuccess;
