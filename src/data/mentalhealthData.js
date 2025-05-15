export const mentalhealthData = {
  type: 'sankey',
  orientation: 'h',
  valueformat: '',
  
  node: {
    pad: 10,
    thickness: 30,
    line: {
      color: '#D3D3D380',
      width: 0.5
    },
    label: [
      'Alcohol and Drug Counseling', 'Human Services BHS', 'Human Services BS', 'Psychology BA', 'Psychology MA', 'Social Work BSW',
      'Internship', 'No Internship',
      'Accommodation and Food Services',	'Educational Services',	'Health Care and Social Assistance', 'Information and Data',	'Other',	'Professional, Scientific, and Technical Services',	'Public Administration', 'Real Estate and Rental and Leasing', 'Religious, Grantmaking, Civic, Professional, and Similar Organizations', 'Retail and Wholesale Trade', 'Transportation and Warehousing',
      'Entry Level', 'First Level<br>Management', 'Intermediate or<br>Experienced Level', 'Middle-Level<br>Management',
      'Accounts Payable/Receivable',	'Addiction Counselor',	'Assistant scientist',	'Care Coordinator',	'Chemical Health Specialist',	'Children\'s Mental Health Case Manager',	'Client Success Manager',	'Community Programs and Engagement Social Worker',	'Delivery Driver',	'Diagnostic Medical Sonographer',	'Director of Unit-Based Services',	'Director/Faculty',	'Driver',	'Employment Guidance Counselor',	'Executive Assistant',	'Human Resources Coordinator',	'Human Services Program Rep II',	'LADC',	'Library Supervisor',	'Licensed Alcohol<br>and Drug Counselor',	'Licensed Social Worker',	'Mental Health Practitioner',	'Mental Health Therapist',	'Outpatient Therapist',	'Psychiatric case worker',	'Research coordinator',	'Research Coordinator',	'Self Employed<br>House Cleaner/<br>Landscaping',	'Senior Chemical Health Professional',	'Senior Manager',	'Social worker',	'Social Worker',	'Therapist',	'Women Campus Minister',

    ],
    color: [
      '#006275', '#006275', '#006275', '#006275', '#006275', '#006275',
      '#006275', '#006275', 
      '#006275', '#006275', '#006275', '#006275', '#006275', '#006275', '#006275', '#006275', '#006275', '#006275', '#006275', 
      '#006275', '#006275', '#006275', '#006275',
      '#006275', '#006275', '#006275', '#006275', '#006275', '#006275', '#006275', '#006275', '#006275', '#006275', '#006275', '#006275', '#006275', '#006275', '#006275', '#006275', '#006275', '#006275', '#006275', '#006275', '#006275', '#006275', '#006275', '#006275', '#006275', '#006275', '#006275', '#006275', '#006275', '#006275', '#006275', '#006275', '#006275', '#006275', '#006275', 
    ],
    hovertemplate: '<span style="text-transform: none">%{value} %{label} alumni</span> <extra></extra>',
  },
  link: {
    source: [
      0, 1, 2, 3, 4, 5,
      0, 1, 2, 3, 4, 5,
      6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 
      7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
      8, 8, 8, 8,  
      9, 9, 9, 9,  
      10, 10, 10, 10,
      11, 11, 11, 11, 
      12, 12, 12, 12, 
      13, 13, 13, 13,
      14, 14, 14, 14,
      15, 15, 15, 15, 
      16, 16, 16, 16, 
      17, 17, 17, 17,
      18, 18, 18, 18, 
      19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19,
      20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 
      21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 
      22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 
      
      //12

    ],
    target: [
      6, 6, 6, 6, 6, 6,
      7, 7, 7, 7, 7, 7,
      8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
      8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
      19, 20, 21, 22,
      19, 20, 21, 22,
      19, 20, 21, 22,
      19, 20, 21, 22,
      19, 20, 21, 22,
      19, 20, 21, 22,
      19, 20, 21, 22,
      19, 20, 21, 22,
      19, 20, 21, 22,
      19, 20, 21, 22,
      19, 20, 21, 22,
      23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54,
      23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54,
      23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54,
      23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54,

      
      
      //12

    ],
    value: [
      9, 7, 10, 14, 3, 7, 
      1, 0, 1, 5, 0, 0, 
      1, 2, 17, 1, 7, 0, 1, 1, 0, 1, 1, 
      0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 0, 
      1, 0, 0, 0,
      0, 0, 1, 1,
      1, 0, 14, 3,
      0, 0, 0, 1,
      1, 0, 6, 1,
      0, 1, 0, 0,
      0, 0, 1, 0,
      0, 0, 1, 0,
      0, 0, 1, 0,
      0, 0, 1, 0,
      1, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0,
      1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 2, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1,
      0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0,


    ],
    color: [
      '#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',																											
      '#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',																											
      '#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',																						
      '#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',																						
      '#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',																														
      '#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',																														
      '#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',																														
      '#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',																														
      '#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',																														
      '#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',																														
      '#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',																														
      '#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',																														
      '#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',																														
      '#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',																														
      '#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',																														
      '#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',
      '#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',
      '#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',
      '#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',
																																	

    ],
    hovertemplate: '<span style="text-transform: none">%{value} %{source.label} alumni<br><span style="font-size:16px">&#8594;</span>%{target.label}</span> <extra></extra>',
  },
};
