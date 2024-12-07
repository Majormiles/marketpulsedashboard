import React from 'react';
import { Link } from 'react-router-dom';

const Pending = () => {
  return (
    <div style={{
      margin: '0px auto',
      padding: '20px',
      maxWidth: '600px',
      backgroundColor: '#283046',
      border: '1px solid #FFD700',
      borderRadius: '10px',
      textAlign: 'center',
      color: '#CBD2D6'
    }}>
      <h1 style={{ color: '#FFD700', fontSize: '2rem', marginBottom: '20px' }}>
        Onboarding Pending
      </h1>
      <p style={{ fontSize: '1rem', margin: '20px 0', lineHeight: '1.5' }}>
        Thank you for registering as a vendor on our platform! Your account is currently under review.
        Our team is thoroughly verifying your details to ensure everything is in order.
      </p>
      <p style={{ fontSize: '0.9rem', margin: '20px 0', lineHeight: '1.5' }}>
        To speed up the review process, please ensure your profile is fully updated with the following details:
      </p>
      <ul style={{
        textAlign: 'left',
        marginLeft: '40px', 
        margin: '20px auto',
        padding: '0 20px',
        fontSize: '1rem',
        color: '#CBD2D6',
        listStyleType: 'disc'
      }}>
        <li>Shop Name</li>
        <li>Division</li>
        <li>District</li>
        <li>Sub-District</li>
        <li>Payment Account</li>
      </ul>
      <p style={{ fontSize: '0.9rem', margin: '20px 0', lineHeight: '1.5' }}>
        This process typically takes <strong>24-48 hours</strong>. You will receive a notification once your account has been activated and is ready to start accepting orders.
      </p>
      <p style={{ fontSize: '1rem', margin: '20px 0', color: '#CBD2D6' }}>
      If you have any questions or need assistance, feel free to <Link  style={{ color: '#FFD700', textDecoration: 'none' }}>contact support</Link>.
      </p>
    </div>


  );
}

export default Pending;
