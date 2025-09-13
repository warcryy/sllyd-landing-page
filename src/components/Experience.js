import React from 'react';
// (reverted) no overlay effect

const Experience = () => {
  return (
    <section className="experience">
      <div className="experience-content">
        <h2 className="section-title">Experience Dating Differently</h2>
        <p className="section-text">No more endless swiping. Meet people who share your lifestyle and favorite spots.</p>
      </div>
      <div className="experience-image">
        <img src={`${process.env.PUBLIC_URL}/experience-dating-differently.jpg`} alt="Experience dating differently" />
      </div>
    </section>
  );
};

export default Experience;
