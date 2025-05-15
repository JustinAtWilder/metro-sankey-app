export const educationData = {
  type: 'sankey',
  orientation: 'h',
  valueformat: '',
  
  node: {
    pad: 9,
    thickness: 30,
    line: {
      color: '#D3D3D380',
      width: 0.5
    },
    label: [
      "Early Childhood Studies BAS",	"English Teaching BS",	"Ethnic Studies BA",	"History BA",	"Liberal Studies MA",	"Social Studies Teaching BS",	"Urban Early Childhood Education BS",	"Urban Education MS",	"Urban Elementary Education BS",
      'Internship', 'No Internship',
      'Accommodation and Food Services',	'Educational Services',	'Manufacturing',	'Other',	'Professional, Scientific, and Technical Services',	'Public Administration',
      'Entry Level', 'First Level<br>Management', 'Intermediate or<br>Experienced Level', 'Middle-Level<br>Management', "Senior, Executive, or<br>Top Management & Chiefs",
      'Accounting Specialist',	'Assembly',	'Business Manager',	'Data Coordinator',	'Director',	'Fire Captain',	'HR Manager',	'Intervention Teacher',	'Kindergarten Teacher',	'Manager, Tax Proposal Operations',	'Program Manager',	'Program Specialist',	'Retail Product Specialist',	'School Success Program Assistant',

    ],
    color: [
      '#006275', '#006275', '#006275', '#006275', '#006275', '#006275', '#006275', '#006275', '#006275',
      '#006275', '#006275', 
      '#006275', '#006275', '#006275', '#006275', '#006275', '#006275', 
      '#006275', '#006275', '#006275', '#006275', '#006275',
      '#006275', '#006275', '#006275', '#006275', '#006275', '#006275', '#006275', '#006275', '#006275', '#006275', '#006275', '#006275', '#006275', '#006275', '#006275', '#006275', '#006275', '#006275', '#006275', '#006275', '#006275', '#006275', '#006275', '#006275', '#006275', '#006275', '#006275', '#006275', '#006275', '#006275', '#006275', '#006275', '#006275', '#006275', '#006275', '#006275', '#006275', '#006275', '#006275', '#006275', '#006275', '#006275', '#006275',
    ],
    hovertemplate: '<span style="text-transform: none">%{value} %{label} alumni</span> <extra></extra>',
  },
  link: {
    source: [
      0, 1, 2, 3, 4, 5, 6, 7, 8, 
      0, 1, 2, 3, 4, 5, 6, 7, 8,
      9, 9, 9, 9, 9, 9, 
      10, 10, 10, 10, 10, 10,
      11, 11, 11, 11, 11,
      12, 12, 12, 12, 12,
      13, 13, 13, 13, 13,
      14, 14, 14, 14, 14,
      15, 15, 15, 15, 15,
      16, 16, 16, 16, 16,
      17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17,
      18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18,
      19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19,
      20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20,
      21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21,

    ],
    target: [
      9, 9, 9, 9, 9, 9, 9, 9, 9,
      10, 10, 10, 10, 10, 10, 10, 10, 10,
      11, 12, 13, 14, 15, 16,
      11, 12, 13, 14, 15, 16,
      17, 18, 19, 20, 21,
      17, 18, 19, 20, 21,
      17, 18, 19, 20, 21,
      17, 18, 19, 20, 21,
      17, 18, 19, 20, 21,
      17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35,
      22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35,
      22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35,
      22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35,
      22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35,

    ],
    value: [
      1, 1, 0, 0, 1, 1, 0, 1, 2, 
      1, 0, 1, 6, 6, 1, 1, 0, 0, 
      0, 3, 0, 0, 0, 0, 
      1, 4, 1, 3, 1, 1, 
      0, 1, 1, 0, 0, 0, 
      0, 1, 0, 1, 0, 0, 
      1, 3, 0, 1, 0, 0, 
      0, 0, 0, 1, 1, 1, 
      0, 2, 0, 0, 0, 0, 
      0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0,
      1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1,
      0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0,




    ],
    color: [
      '#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',				
      '#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',				
      '#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',							
      '#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',							
      '#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',							
      '#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',							
      '#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',							
      '#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',							
      '#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',							
      '#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',
      '#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',
      '#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',
      '#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',
      '#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',	'#D3D3D390',

    ],
    hovertemplate: '<span style="text-transform: none">%{value} %{source.label} alumni<br><span style="font-size:16px">&#8594;</span>%{target.label}</span> <extra></extra>',
  },
};
