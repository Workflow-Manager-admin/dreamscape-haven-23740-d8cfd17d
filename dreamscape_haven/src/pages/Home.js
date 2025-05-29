import React from 'react';

// PUBLIC_INTERFACE
function Home() {
  /** The Home page welcomes the user and introduces Dreamscape Haven. */
  return (
    <div className="hero">
      <div className="subtitle">Welcome to Dreamscape Haven</div>
      <h1 className="title">Dream Journal Visualizer</h1>
      <div className="description">
        Log your dreams, visualize their mood, and find inspiration in your nightly journeys.
      </div>
    </div>
  );
}

export default Home;
