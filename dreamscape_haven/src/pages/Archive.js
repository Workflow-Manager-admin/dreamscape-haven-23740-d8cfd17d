import React from 'react';

// PUBLIC_INTERFACE
function Archive() {
  /** The Archive page for viewing past dream entries and visualizations. */
  return (
    <div className="container" style={{ paddingTop: '110px' }}>
      <h2>Dream Archive</h2>
      <p>View past dreams and their visualizations. (Feature coming soon)</p>
      {/* Placeholder for future archive list */}
      <div style={{
        background: 'rgba(255,255,255,0.07)',
        borderRadius: '12px',
        padding: '24px',
        marginTop: '32px',
      }}>
        Archived dreams will be displayed here.
      </div>
    </div>
  );
}

export default Archive;
