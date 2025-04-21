export const nursingData = {
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
      'Biology', 'Human Resource Management', 'Human Services', 'Individualized Studies', 
      'Liberal Arts', 'Nursing', 'Nursing Practice', 'Nursing Science', 'Social Science',
      // Internships
      'Did an Internship', 'No intership', 'Not sure',
      //Industry
      'Healthcare and<br>Social Assistance', 'Educational Services', 'Other',
      //Job lvel
      'Entry Level', 'First Level Management', 'Middle Level Management', 'Intermediate or<br>Experienced Level', 'Senior, Executive or<br>Top Level Management',
      // Job title
      'Care Coordinator', 'Community Paramedic', 'Critical Care Nurse Practitioner', 'Emergency Medical<br>Services Team Manager', 'Doula', 'Graduate Pharmacist Intern', 'Healthcare Worker', 'Nurse', 'Nurse Anesthetist', 'Nurse Practitioner', 'Public Health Nurse', 'Registered Nurse', 'RN and Clinical Educator', 'RN, BSN, PHN, SANE-A', 'Senior Health Coach',

        ],
        color: [
      // Colors for each node (you can customize these)
      '#006275', '#006275', '#006275', '#006275', '#006275', '#C6612D', '#C6612D', '#C6612D', '#006275',
      '#C6612D', '#C6612D', '#C6612D', 
      '#C6612D', '#006275', '#006275',
      '#C6612D', '#006275', '#C6612D', '#C6612D', '#006275',
      '#006275', '#006275', '#C6612D', '#006275', '#006275', '#006275', '#006275', '#C6612D', '#C6612D',  '#C6612D', '#C6612D', '#C6612D', '#C6612D', '#C6612D', '#006275', '#006275',
    ],
  },
  link: {
    source: [
     0, 1, 2, 3, 4, 5, 6, 7, 8,
     0, 1, 2, 3, 4, 5, 6, 7, 8,
     0, 1, 2, 3, 4, 5, 6, 7, 8,
     10, 10, 10,
     9, 9, 9,
     11, 11, 11,
     12, 12, 12, 12, 12,
     13, 13, 13, 13, 13,
     14, 14, 14, 14, 14,
     15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
     16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,
     18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18,
     17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17,
     19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19,

    ],
    target: [
     10, 10, 10, 10, 10, 10, 10, 10, 10,
     9, 9, 9, 9, 9, 9, 9, 9, 9,
     11, 11, 11, 11, 11, 11, 11, 11, 11,
     13, 12, 14,
     13, 12, 14,
     13, 12, 14,
     15, 16, 18, 17, 19,
     15, 16, 18, 17, 19,
     15, 16, 18, 17, 19,
     20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34,
     20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34,
     20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34,
     20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34,
     20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34,
    ],
    value: [
    1, 1, 0, 1, 1, 6, 0, 1, 1,
    0, 0, 1, 2, 0, 8, 0, 2, 0,
    0, 0, 0, 0, 0, 0, 0, 1, 0,
    1, 10, 1,
    1, 12, 0,
    0, 1, 0,
    4, 1, 17, 2, 0, 
    0, 0, 1, 1, 0, 
    0, 0, 0, 0, 1,
    0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 2, 0, 0, 1, 
    0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 
    1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 2, 9, 1, 1, 0, 
    0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 
    0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,    

    ],
    color: [
      '#D3D3D380', '#D3D3D380', '#D3D3D380', '#D3D3D380', '#D3D3D380', '#FCB44080', '#D3D3D380', '#FCB44080', '#D3D3D380', 
      '#D3D3D380', '#D3D3D380', '#D3D3D380', '#D3D3D380', '#D3D3D380', '#FCB44080', '#D3D3D380', '#FCB44080', '#D3D3D380', 
      '#D3D3D380', '#D3D3D380', '#D3D3D380', '#D3D3D380', '#D3D3D380', '#D3D3D380', '#D3D3D380', '#FCB44080', '#D3D3D380', 
      '#D3D3D380', '#FCB44080', '#D3D3D380', 
      '#D3D3D380', '#FCB44080', '#FCB44080', 
      '#D3D3D380', '#FCB44080', '#D3D3D380', 
      '#FCB44080', '#FCB44080', '#FCB44080', '#FCB44080', '#D3D3D380', 
      '#D3D3D380', '#D3D3D380', '#D3D3D380', '#D3D3D380', '#D3D3D380', 
      '#D3D3D380', '#D3D3D380', '#D3D3D380', '#D3D3D380', '#D3D3D380', 
      '#D3D3D380', '#D3D3D380', '#D3D3D380', '#D3D3D380', '#D3D3D380', '#D3D3D380', '#D3D3D380', '#D3D3D380', '#D3D3D380', '#D3D3D380', '#D3D3D380', '#FCB44080', '#D3D3D380', '#D3D3D380', '#D3D3D380',
      '#D3D3D380', '#D3D3D380', '#D3D3D380', '#D3D3D380', '#D3D3D380', '#D3D3D380', '#D3D3D380', '#D3D3D380', '#D3D3D380', '#D3D3D380', '#D3D3D380', '#FCB44080', '#D3D3D380', '#FCB44080', '#D3D3D380',
      '#D3D3D380', '#D3D3D380', '#FCB44080', '#FCB44080', '#FCB44080', '#FCB44080', '#FCB44080', '#FCB44080', '#FCB44080', '#FCB44080', '#FCB44080', '#FCB44080', '#FCB44080', '#FCB44080', '#FCB44080',
      '#D3D3D380', '#D3D3D380', '#D3D3D380', '#D3D3D380', '#D3D3D380', '#D3D3D380', '#D3D3D380', '#D3D3D380', '#D3D3D380', '#FCB44080', '#D3D3D380', '#FCB44080', '#D3D3D380', '#D3D3D380', '#D3D3D380',
      '#D3D3D380', '#D3D3D380', '#D3D3D380', '#D3D3D380', '#D3D3D380', '#D3D3D380', '#D3D3D380', '#D3D3D380', '#D3D3D380', '#D3D3D380', '#FCB44080', '#FCB44080', '#D3D3D380', '#D3D3D380', '#FCB44080', 
    ]
  }
};