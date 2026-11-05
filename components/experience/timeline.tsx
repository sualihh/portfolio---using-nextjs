
// Helper function to extract year from date


// Helper function to get duration text


  return (
    <div className="space-y-4">
      {sortedExperiences.map((experience, index) => (
        <AnimatedSection
          key={experience.id}
          delay={0.1 * (index + 1)}
          direction="up"
        >
         
        </AnimatedSection>
      ))}
    </div>
  );
};

export default Timeline;
