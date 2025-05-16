import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './CareerCompetencies.module.css'; // Import CSS Module
import "@fontsource/montserrat/400.css";


// Career competencies data
const competenciesData = [
  {
    id: 1,
    title: "Professional Communication",
    details: [
      "Articulate thoughts and ideas clearly",
      "Demonstrate proficiency in interpersonal conversations, public speaking, and writing",
      "Exhibit excellent listening skills",
    ],
  },
  {
    id: 2,
    title: "Critical Thinking and Problem Solving",
    details: [
      "Analyze issues, make decisions, and overcome problems using insights from a variety of perspectives",
      "Obtain, interpret, and use knowledge, facts, and data to reach a goal or outcome",
    ],
  },
  {
    id: 3,
    title: "Ethical Decision Making",
    details: [
      "Maintain a high standard of conduct, even when it is difficult",
      "Collect and evaluate information, develop alternatives, and foresee potential consequences and risks",
      "Assess the moral implications of a course of action",
    ],
  },
  {
    id: 4,
    title: "Innovation and Creativity",
    details: [
      "Look at the world differently, generating new ideas, and make connections between seemingly unrelated things",
      "Take a leap, try new things, and go beyond conventional approaches",
    ],
  },
  {
    id: 5,
    title: "Leadership and Followership",
    details: [
      "Leadership: leverage the strengths of others to achieve common goals",
      "Followership: be part of a team and deliver on what is expected",
    ],
  },
  {
    id: 6,
    title: "Teamwork and Collaboration",
    details: [
      "Cultivate positive, collaborative relationships with colleagues and customers",
      "Consider the needs, abilities, and goals of each group member",
      "Negotiate and manage conflict civilly",
    ],
  },
  {
    id: 7,
    title: "Cultural Agility, Inclusion, and Anti-Racism",
    details: [
      "Respect multiple worldviews",
      "Challenge individual biases, and participate in what may be difficult dialogues",
      "Understand the foundations of racism and the subtle role of race in our personal and professional everyday life",
    ],
  },
  {
    id: 8,
    title: "Community Engagement",
    details: [
      "Build awareness of how communities impact individuals and how individuals impact, serve, and shape communities",
      "Form partnerships and coalitions to influence change in policies, programs, and practices",
    ],
  },
  {
    id: 9,
    title: "Digital Literacy",
    details: [
      "Utilize new tools, adapt, and keep up with emerging technologies",
    ],
  },
  {
    id: 10,
    title: "Continuous Learning and Career Management",
    details: [
      "Know how personal strengths and qualities, shaped by a liberal arts education, lead to career success",
      "Maintain curiosity about the world of work and a willingness to invest in networking connections",
    ],
  },
];

// CompetencyCard component for individual competency items
const CompetencyCard = ({ competency, isExpanded, onClick }) => {

  const cardColors = {
    1: "#78BE20", // Green
    2: "#006275", //Medium Blue      
    3: "#faa00f", // Orange cream
    4: "#E03C31", // Terracotta
    5: "#2a99b0", // Teal
    6: "#E03C31", // Bright Red
    7: "#F38C1D", //Orange
    8: "#4D97AD", // Tealish
    9: "#006275", // Medium Blue
    10: "#78BE20", // Green
  };

  const tooltipColors = {
    1: "#78BE20", // Green
    2: "#006275", //Medium Blue
    3: "#faa00f", // Orange cream
    4: "#E03C31", // Terracotta
    5: "#2a99b0", // Teal
    6: "#E03C31", // Bright Red
    7: "#F38C1D", // Orange
    8: "#4D97AD", // Tealish
    9: "#006275", // Medium Blue
    10: "#78BE20", // Green
  };
    return (
      <motion.div
        className={styles.competencyContainer}
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3}}
      >      
        <motion.div
          className={`${styles.competencyCard} ${
            isExpanded ? styles.competencyCardExpanded : ''
          }`}
          style={{ backgroundColor: cardColors[competency.id] }} // Dynamic color
          whileHover={{ }}
          onClick={onClick}
          layout
        >
          <h3 className={styles.competencyTitle}>{competency.title}</h3>
        </motion.div>
  
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              className={styles.competencyTooltip}
              style={{ backgroundColor: tooltipColors[competency.id] }} // Dynamic color
              initial={{ 
                opacity: 0, 
                scale: 0.8,
                position: "fixed",
                top: "50%",
                left: "50%",
                x: "-50%",
                y: "-50%",
                zIndex: 1000
              }}
              animate={{ 
                opacity: 1, 
                scale: 1,
              }}
              exit={{ 
                opacity: 0, 
                scale: 0.8,
              }}
              transition={{ duration: 0.3 }}
              onClick={(e) => {
                e.stopPropagation(); // First stop propagation to prevent double-handling
                onClick(); // Then call the same onClick handler that the card uses
              }}
            >
              <div className={styles.tooltipContent}>
                <h4 className={styles.tooltipTitle}>{competency.title}</h4>
                {/* Render the details as an unordered list */}
                <ul className={styles.tooltipList}>
                  {Array.isArray(competency.details) &&
                    competency.details.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    );
  };
// Main CareerCompetencies component
const CareerCompetencies = () => {
  const [expandedId, setExpandedId] = useState(null);

  const handleCardClick = (id) => {
    setExpandedId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className={styles.careerCompetenciesContainer}>
      {/* Backdrop overlay that appears when a tooltip is visible */}
      <AnimatePresence>
        {expandedId && (
          <motion.div 
            className={styles.modalBackdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setExpandedId(null)}
          />
        )}
      </AnimatePresence>
      <h2 className={styles.careerCompetenciesTitle}>
        Career Competencies
      </h2>
      
      <motion.div className={styles.competenciesGrid} layout>
        {competenciesData.map((competency) => (
          <CompetencyCard
            key={competency.id} // Use competency.id as the key
            competency={competency}
            isExpanded={expandedId === competency.id} // Compare expandedId with competency.id
            onClick={() => handleCardClick(competency.id)} // Pass competency.id to handleCardClick
          />
        ))}
      </motion.div>
    </div>
  );
};

export default CareerCompetencies;