import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './CareerCompetencies.module.css'; // Import CSS Module
import "@fontsource/montserrat/400.css";


// Career competencies data
const competenciesData = [
  {
    id: 1,
    title: "Professional Communication",
    description: " is the ability to use interpersonal and intercultural skills to engage with individuals, groups and communities. It requires the use of interpersonal skills and self-reflection. Adaptations are made according to audience, purpose, and nature of communication (written, verbal, and other modes).",
    leader: "Skills demonstrating professional communication are:",
    details: [
      "Using active listening to learn from and about others",
      "Engaging in self-reflection to explore thoughts and feelings when communicating with others",
      "Providing purposeful written, verbal or other modes of communication adapted to individuals, groups, and communities involved in the communication",
      "Reflecting respect and value of the person or people in the communication",
    ],
  },
  {
    id: 2,
    title: "Critical Thinking",
    description: " is the ability to question assumptions and discern biases, analyze information, and determine appropriate actions in relation to an idea, concept, or situation. It requires creativity in thinking and openness to fresh perspectives and new sources of information.",
    leader: "Skills demonstrating critical thinking are:",
    details: [
      "Describing a specific idea, concept or situation for focus",
      "Determining what information is needed to explore the situation",
      "Identifying values and beliefs reflected in information, and discern how biases impact the understanding of that information",
      "Analyzing the information and suggesting possible actions to solve a problem based on that analysis",
    ],
  },
  {
    id: 3,
    title: "Ethical Decision Making",
    description: " is the ability to apply an ethical code of conduct or framework to a situation that is grounded in the values of a community, profession, and/or belief system. It requires perspective-taking to understand the impact of ethical decisions on the people involved in a situation.",
    leader: "Skills demonstrating ethical decision making are:",
    details: [
      "Describing the situation in need of ethical decision making",
      "Collecting information from multiple perspectives on the situation",
      "Assess the moral implications of a course of aApplying an ethical model to identify possible actions",
      "Weighing the possible actions and their consequences",
      "Taking action and evaluating that action",
    ],
  },
  {
    id: 4,
    title: "Curiosity",
    description: " is the desire to learn new things and explore fresh perspectives, and in doing so apply that knowledge in innovative ways. Curiosity is a catalyst for growth and positive change. To be curious is to engage in learning for its own sake.",
    leader: "Skills demonstrating curiosity are:",
    details: [
      "Seeking out learning through connections with resources",
      "Acknowledging that discomfort can occur when learning",
      "Identifying questions to guide and motivate learning",
      "Engaging and exchanging ideas new people and participating in novel experiences",
      "Applying learning to situations to find solutions that are innovative in the respective setting",
    ],
  },
  {
    id: 5,
    title: "Teamwork",
    description: " is present when people work collaboratively to meet a goal or outcome. Each person provides skills and abilities to support progress and help with task, process, and relational functioning. This includes the ability of each person to step forward as a leader or collaborator as relevant to the situation",
    leader: "Skills demonstrating teamwork are:",
    details: [
      "Engaging communication skills and empathy to learn the perspectives of others",
      "Affirming the role of lived experience in how people approach teamwork",
      "Communicating own perspective with others and sharing information",
      "Acknowledging that conflict can be an important dynamic in teamwork",
      "Working with others to find a collaborative solution to conflict",
      "Accepting and sharing feedback with others",
    ],
  },
  {
    id: 6,
    title: "Cultural Agility, Inclusion, and Anti-Racism Practice",
    description: " requires individuals to identify, challenge and change the values, structures and behaviors that perpetuate systemic oppression in order to create a more equitable society. People are agents of change.",
    leader: "Skills demonstrating cultural agility, inclusion and anti-racist practice are:",
    details: [
      "Acknowledging and exploring how identity and culture impacts personal and professional experiences",
      "Respect multiple worldviews",
      "Using empathy to understand the lived experiences of others",
      "Engaging in self-awareness to determine how intersectional identities impact others, creating connections or forming barriers",
      "Embracing differences while recognizing shared humanity",
      "Questioning how information is presented and by whom",
      "Adapting communication based on cultural context",
      "Advocating for change to challenge systemic oppression",
    ],
  },
  {
    id: 7,
    title: "Community Engagement",
    description: " is a collaborative process where people work together and leverage community strengths to address shared concerns, resolve issues, or enhance the community.",
    leader: "Skills demonstrating community engagement are:",
    details: [
      "Demonstrating social responsibility by seeking opportunities to engage with others, including in own communities",
      "Intentionally learning a community’s perspective on a concern, issue or topic",
      "Adapting communication based on the cultural and community context",
      "Identifying and dissecting biases and stereotypes, allowing for the development of a new understanding of the community",
      "Participating in the collaborative process by being present and sharing ideas",
    ],
  },
  {
    id: 8,
    title: "Digital Literacy",
    description: " is the ability to find, evaluate and use technology as appropriate to a specific purpose, including communicating, solving problems, and completing tasks. Technology can include simple programs (word processing) to more complex applications (artificial intelligence).",
    leader: "Skills demonstrating digital literacy are:",
    details: [
      "Determining which current and emerging technological tools may be appropriate based on purpose and audience",
      "Analyzing the technological tool(s) for reliability and validity",
      "Assessing if the technological tool(s) follows ethical requirements, including copyright, confidentiality and safety of information",
      "Evaluating the ethical implications to the use of technology, including environmental and social impacts",
      "Implementing the technological tool(s) and evaluating the outcome",
    ],
  },
  {
    id: 9,
    title: "Career Management",
    description: " is a strategic approach to advancing one’s career, and includes setting goals, networking, and staying current with trends in the chosen industry. It requires continuous learning, curiosity and the ability to be proactive in seeking out new opportunities to develop knowledge and skills and build relationships with others.",
    leader: "Skills demonstrating career management and continuous learning are:",
    details: [
      "Using self-regulation to manage time, organize tasks, and meet goals",
      "Developing connections with people who can provide career guidance and expand the professional network",
      "Utilizing resources to develop knowledge, including library materials and career-related events",
      "Establishing and evaluating achievable goals that align with strengths, capabilities and areas for growth",
      "Communicating professional goals to others and advocating for own needs and opportunities",
    ],
  },
];

// CompetencyCard component for individual competency items
const CompetencyCard = ({ competency, isExpanded, onClick }) => {

  const cardColors = {
    1: "#12743C", // Medium Green
    2: "#006275", //Medium Blue      
    3: "#711A27", // Dark red
    4: "#E03C31", // Terracotta
    5: "#C6612D", // Dark orange
    6: "#78BE20", // Green
    7: "#F38C1D", //Orange
    8: "#4D97AD", // Tealish
    9: "#AF272F", // Medium red
  };

  const tooltipColors = {
    1: "#12743C", // Medium Green
    2: "#006275", //Medium Blue
    3: "#711A27", // Dark red
    4: "#E03C31", // Terracotta
    5: "#C6612D", // Dark orange
    6: "#78BE20", // Green
    7: "#F38C1D", // Orange
    8: "#4D97AD", // Tealish
    9: "#AF272F", // Medium red
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
              style={{ backgroundColor: tooltipColors[competency.id],
               }} // Dynamic color
              initial={{ 
                opacity: 0, 
                scale: 0.8,
                position: "fixed",
                borderRadius: "8px",
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
                <p className={styles.tooltipDescription}><b className={styles.tooltipTitle}>{competency.title}</b>{competency.description}</p>
                <p className={styles.tooltipLeader}>{competency.leader}</p>
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