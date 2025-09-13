import React from 'react';
// (reverted) no overlay effect

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <h2 className="section-title">Why sllyd?</h2>
        <p className="section-text">Because real vibes don’t come from endless swipes. With sllyd, you discover people who already share your world — the cafés you love, the concerts you vibe at, the bars where you unwind. It’s all about real spaces, real energy, and connections that actually fit your lifestyle.</p>
      </div>
      <div className="about-image" style={{ position: 'relative' }}>
        <img src="/why-sllyd.jpg" alt="Why sllyd" />
      </div>
    </section>
  );
};

export default About;
