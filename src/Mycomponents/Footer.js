import React from 'react';

const footerStyle = {
  backgroundColor: '#1a1a1a', // Dark background to match the rest of the theme
  color: '#ccc', // Light gray text for better contrast
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '60px', // Adjust height as needed
  borderTop: '1px solid #333', // Subtle border to separate from content above
  fontSize: '14px', // Adjust font size for readability
  padding: '0 20px', // Add horizontal padding
  position: 'fixed', // Fixes the footer at the bottom
  bottom: 0, // Stick to the bottom
  width: '100%', // Full width
  zIndex: 1000, // Ensure it stays above other content
};

const iconStyle = {
  marginRight: '8px', // Space between icon and text
};

export const Footer = () => {
  return (
    <div style={footerStyle}>
      <span style={iconStyle}>✔️</span> {/* Checkmark symbol */}
      Todo List App
    </div>
  );
}
