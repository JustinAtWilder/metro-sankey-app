export const mentalhealthData = {
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
      'Alcohol and<br>Drug Counseling', 'Human Services', 'Individualized Studies',
      'Nursing', 'Professional Communication', 'Psychology', 'Social Work',
      // Internships
      'Did an Internship', 'No intership',
      //Industry
      'Healthcare and<br>Social Assistance', 'Other', 'Religious, Grantmaking,<br>Civic, Professional, and<br>Similar Organizations',
      //Job level
      'Entry Level', 'Intermediate or<br>Experienced Level', 'Middle Level<br>Management',
      // Job title
      'Addiction Counselor', 'Chemical Health Specialist', 'Children\'s Mental Health<br>Case Manager', 'Community Programs and<br>Engagement Social Worker', 'Licensed Alcohol and<br>Drug Counselor', 'Licensed Social Worker', 'Mental Health Practitioner', 'Mental Health Therapist', 'Outpatient Therapist', 'Psychiatric Associate', 'Psychiatric Case Worker', 'Psychiatric Mental Health<br>Nurse Practitioner', 'Psychiatric Provider', 'Senior Chemical<br>Health Professional', 'Social Worker', 'Therapist', 'Women Campus Minister',
    ],
    color: [
      // Colors for each node (you can customize these)
      '#437341', '#437341', '#006275', '#006275', '#006275', '#437341', '#437341',
      '#437341', '#437341',
      '#437341', '#437341', '#006275',
      '#437341', '#437341', '#437341', 
      '#437341', '#437341', '#437341', '#437341', '#437341', '#437341', '#437341', '#437341', '#437341', '#437341', '#437341', '#437341', '#437341', '#437341', '#437341', '#437341', '#006275',
    ],
  },
  link: {
    source: [
      0, 1, 2, 3, 4, 5, 6, 
      0, 1, 2, 3, 4, 5, 6, 
      7, 7, 7, 8, 8, 8,
      9, 9, 9, 10, 10, 10, 11, 11, 11, 
      12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12,
      13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 
      14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14
    ],
    target: [
      7, 7, 7, 7, 7, 7, 7, 
      8, 8, 8, 8, 8, 8, 8, 
      9, 10, 11, 9, 10, 11, 
      12, 13, 14, 12, 13, 14, 12, 13, 14, 
      15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 
      15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 
      15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
    ],
    value: [
      4, 3, 0, 0, 0, 5, 2, 0, 0, 1, 2, 1, 2, 0, 11, 3, 0, 4, 1, 1, 1, 12, 2, 1, 2, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 2, 1, 0, 1, 1, 0, 1, 2, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0
    ],
    color: [
      '#95bd4d80', '#95bd4d80', '#D3D3D380', '#D3D3D380', '#D3D3D380', '#95bd4d80', '#95bd4d80', 
      '#D3D3D380', '#D3D3D380', '#D3D3D380', '#D3D3D380', '#D3D3D380', '#95bd4d80', '#D3D3D380', 
      '#95bd4d80', '#95bd4d80', '#D3D3D380', '#95bd4d80', '#95bd4d80', '#D3D3D380',
      '#95bd4d80', '#95bd4d80', '#95bd4d80', '#95bd4d80', '#95bd4d80', '#95bd4d80', '#D3D3D380', '#D3D3D380', '#D3D3D380', '#D3D3D380', 
      '#95bd4d80', '#95bd4d80', '#95bd4d80', '#95bd4d80', '#95bd4d80', '#95bd4d80', '#95bd4d80', '#95bd4d80', '#95bd4d80', '#95bd4d80', '#95bd4d80', '#95bd4d80', '#95bd4d80', '#95bd4d80', '#95bd4d80', 
      '#95bd4d80', '#95bd4d80', '#95bd4d80', '#95bd4d80', '#95bd4d80', '#95bd4d80', '#95bd4d80', '#95bd4d80', '#95bd4d80', '#95bd4d80', '#95bd4d80', '#95bd4d80', '#95bd4d80', '#95bd4d80', '#95bd4d80', '#95bd4d80',   
      '#95bd4d80', '#D3D3D380', '#95bd4d80', '#95bd4d80', '#95bd4d80', '#95bd4d80', '#95bd4d80', '#95bd4d80', '#95bd4d80', '#95bd4d80', '#95bd4d80', '#95bd4d80', '#95bd4d80', '#95bd4d80', '#95bd4d80', '#95bd4d80',
    ]
  }
};
