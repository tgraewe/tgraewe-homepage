import React from 'react';

const Contact = ({ width, height, color }) => {
  const card = {
    width: width,
    height: height,
    backgroundColor: color,
    borderRadius: '30px'
  };

  return (
    <div style={card}>
        <h2>Say hello!👋</h2>
        <p><a href="mailto:tommaso.graewe@gmail.com">tommaso.graewe@gmail.com</a><br /></p>
    </div>
  );
};

export default Contact;