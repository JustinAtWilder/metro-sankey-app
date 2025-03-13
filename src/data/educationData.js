export const educationData = {
    type: 'sankey',
    orientation: 'h',
    valueformat: '',
    node: {
      pad: 5,
      thickness: 30,
      line: {
        color: '#D3D3D380',
        width: 0.5
      },
      label: [
        // Majors
        'Biology', 'Early Childhood Studies', 'English', 'English Teaching', 'Human Resource Management', 'Human Services', 
        'Individualized Studies', 'Liberal Arts', 'Public and Nonprofit<br>Administration', 'Technical Communication', 'Technical Communication<br>and Professional Writing',
        'Urban Elementary Education',
        // Internships
        'Did an Internship', 'No intership',
        //Industry
        'Educational Services', 'Manufacturing',
        //Job lvel
        'Entry Level', 'First Level Management', 'Intermediate or<br>Experienced Level', 'Middle-Level Management', 'Senior, Executive or<br>Top Level Management',
        // Job title
        'Assistant Dean', 'Associate Director', 'Associate Professor', 'Associate Provost<br>for Student Success', 'Coordinator of Retention<br>and Student Success', 'Director of Cultural Fluency,<br>Equity and Inclusion', 'Director/Faculty', 'Faculty', 'Instructional Designer', 'Intervention Teacher', 'Kindergarten Teacher', 'Learning & Development<br>Assistant Program Manager', 'Learning Specialist', 'Manager of Instructional<br>Design and Talent Development', 'Online Learning Specialist', 'Professor', 'School Success Program Assistant', 'Scientific Affairs<br>and Education Manager', 'Substitute Teacher<br>/Paraprofessional and Delivery Driver', 'Teacher and Coordinator',
      ],
       color: [
        // Colors for each node (you can customize these)
        '#0a57a2', '#0a57a2', '#0a57a2', '#0a57a2', '#006275', '#006275', '#006275', '#006275', '#006275', '#006275', '#006275', '#006275',
        '#0a57a2', '#0a57a2', 
        '#0a57a2', '#006275',
        '#0a57a2', '#0a57a2', '#0a57a2', '#0a57a2', '#0a57a2',
        '#0a57a2', '#0a57a2', '#0a57a2', '#0a57a2', '#0a57a2', '#0a57a2', '#0a57a2', '#0a57a2', '#0a57a2', '#0a57a2', '#0a57a2', '#0a57a2', '#0a57a2', '#0a57a2', '#0a57a2', '#0a57a2', '#0a57a2', '#006275', '#0a57a2', '#0a57a2',
        ],
    },
    link: {
      source: [
       0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
       0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
       12, 12, 
       13, 13,
       14, 14, 14, 14, 14,
       15, 15, 15, 15, 15,
       16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,
       17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17,
       18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 
       19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19,
       20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20,

  
      ],
      target: [
       12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12,
       13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13,
       14, 15,
       14, 15,
       16, 17, 18, 19, 20,
       16, 17, 18, 19, 20,
       21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
       21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
       21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
       21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
       21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,

      ],
      value: [
       1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0,
       0, 1, 2, 0, 1, 0, 4, 1, 2, 0, 0, 0,
       6, 0, 
       11, 1,
       1, 3, 7, 5, 1, 
       0, 1, 0, 0, 0,
       0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
       0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0,
       0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 
       0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0,
       1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
  
      ],
      color: [
        '#045cb490', '#D3D3D380', '#D3D3D380', '#045cb490', '#D3D3D380', '#D3D3D380', '#D3D3D380', '#D3D3D380', '#D3D3D380', '#D3D3D380', '#D3D3D380', '#D3D3D380',
        '#D3D3D380', '#045cb490', '#045cb490', '#045cb490', '#D3D3D380', '#D3D3D380', '#D3D3D380', '#D3D3D380', '#D3D3D380', '#D3D3D380', '#D3D3D380', '#D3D3D380',
        '#045cb490', '#045cb490', '#045cb490', '#D3D3D380', '#045cb490', '#045cb490', '#045cb490', '#045cb490', '#045cb490', 
        '#D3D3D380', '#D3D3D380', 
        '#D3D3D380', '#D3D3D380', 
        '#D3D3D380', '#D3D3D380', '#D3D3D380', '#D3D3D380', '#D3D3D380', 
        '#D3D3D380', '#D3D3D380', '#D3D3D380', '#D3D3D380', '#D3D3D380', 
        '#045cb490', '#045cb490', '#045cb490', '#045cb490', '#D3D3D380', '#D3D3D380', '#D3D3D380', '#D3D3D380', '#D3D3D380', '#D3D3D380', '#D3D3D380', '#D3D3D380', '#045cb490', '#045cb490', '#045cb490', '#045cb490', '#045cb490', '#045cb490', '#045cb490', '#045cb490', '#045cb490',
        '#045cb490', '#045cb490', '#045cb490', '#045cb490', '#045cb490', '#045cb490', '#D3D3D380', '#D3D3D380', '#D3D3D380', '#D3D3D380', '#D3D3D380', '#D3D3D380', '#D3D3D380', '#045cb490', '#045cb490', '#045cb490', '#045cb490', '#045cb490', '#045cb490', '#045cb490', '#045cb490',
        '#045cb490', '#045cb490', '#045cb490', '#045cb490', '#045cb490', '#045cb490', '#045cb490', '#045cb490', '#045cb490', '#045cb490', '#045cb490', '#045cb490', '#045cb490', '#045cb490', '#045cb490', '#045cb490', '#045cb490', '#045cb490', '#045cb490', '#045cb490', '#045cb490',
        '#045cb490', '#045cb490', '#045cb490', '#045cb490', '#045cb490', '#045cb490', '#D3D3D380', '#045cb490', '#045cb490', '#045cb490', '#045cb490', '#045cb490', '#045cb490', '#045cb490', '#045cb490', '#045cb490', '#045cb490', '#045cb490', '#045cb490', '#045cb490', '#045cb490',
        '#045cb490', '#045cb490', '#045cb490', '#045cb490', '#045cb490', '#045cb490', '#D3D3D380', '#045cb490', '#045cb490', '#045cb490', '#045cb490', '#045cb490', '#045cb490', '#D3D3D380', '#045cb490', '#045cb490', '#045cb490', '#045cb490', '#045cb490', '#045cb490', '#045cb490',
      ]
    }
  };