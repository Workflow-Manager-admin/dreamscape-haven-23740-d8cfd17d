import React from 'react';

// PUBLIC_INTERFACE
function About() {
  /** The About page with project background and credits. */
  return (
    <div className="container" style={{ paddingTop: '110px' }}>
      <h2>About Dreamscape Haven</h2>
      <div className="description" style={{ marginTop: '1em', marginBottom: '2em' }}>
        Dreamscape Haven is a peaceful space to log your dreams, explore moods, and unlock inspiration. 
        This project visualizes dream content to create an immersive, calming journaling experience.
      </div>
      <div style={{ color: 'var(--text-secondary)' }}>
        Created for those who love to dream.
      </div>
    </div>
  );
}

export default About;
