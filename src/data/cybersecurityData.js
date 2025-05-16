export const cybersecurityData = {
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
      'Computer Forensics BAS', 'Computer Information Systems BS', 'Computer Information Technology BS', 'Computer Science BS', 'Computer Science MS', 'Management Information Systems BS','Management Information Systems MMIS',
      'Internship', 'No Internship',
      'Arts, Entertainment, and Recreation',	'Finance and Insurance',	'Information and Data',	'Management of Companies and Enterprises',	'Manufacturing',	'Other',	'Professional, Scientific, and Technical Services',	'Telecommunications',
      'Entry Level', 'First Level<br>Management', 'Intermediate or<br>Experienced Level', 'Middle-Level<br>Management',
      'Application Developer',	'Application Programmer',	'Business Analyst',	'Compliance Analyst',	'Field Applications Engineer',	'Manager, enterprise<br>Customer success',	'Ops manager',	'Retired',	'Senior Consultant',	'Senior Manager',	'Senior Quality Assurance Analyst',	'Senior software engineer',	'Senior Systems Analyst',	'Software Developer',	'Software Engineer',	'Software Engineer II',	'Sr. Software Engineer',	'Systems Architect/Solution Architect',
  
    ],
    color: [
      '#006275', '#006275', '#006275', '#006275', '#006275', '#006275', '#006275',
      '#006275', '#006275', 
      '#006275', '#006275', '#006275', '#006275', '#006275', '#006275', '#006275', '#006275', 
      '#006275', '#006275', '#006275', '#006275',
      '#006275', '#006275', '#006275', '#006275', '#006275', '#006275', '#006275', '#006275', '#006275', '#006275', '#006275', '#006275', '#006275', '#006275', '#006275', '#006275', '#006275', '#006275', '#006275', '#006275', '#006275', '#006275', '#006275', '#006275', '#006275', '#006275', '#006275', '#006275', '#006275', '#006275', '#006275', '#006275', '#006275', '#006275', '#006275', '#006275', '#006275', '#006275', '#006275', '#006275', '#006275', '#006275',
    ],
    hovertemplate: '<span style="text-transform: none">%{value} %{label} alumni</span> <extra></extra>',
  },
  link: {
    source: [
      0, 1, 2, 3, 4, 5, 6,
      0, 1, 2, 3, 4, 5, 6,
      7, 7, 7, 7, 7, 7, 7, 7, 
      8, 8, 8, 8, 8, 8, 8, 8, 
      9, 9, 9, 9,
      10, 10, 10, 10,
      11, 11, 11, 11,
      12, 12, 12, 12,
      13, 13, 13, 13,
      14, 14, 14, 14,
      15, 15, 15, 15,
      16, 16, 16, 16,
      17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17,
      18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18,
      19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19,
      20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20,
      

    ],
    target: [
      7, 7, 7, 7, 7, 7, 7,
      8, 8, 8, 8, 8, 8, 8,
      9, 10, 11, 12, 13, 14, 15, 16,
      9, 10, 11, 12, 13, 14, 15, 16,
      17, 18, 19, 20,
      17, 18, 19, 20,
      17, 18, 19, 20,
      17, 18, 19, 20,
      17, 18, 19, 20,
      17, 18, 19, 20,
      17, 18, 19, 20,
      17, 18, 19, 20,
      21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,
      21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,
      21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,
      21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,
      
      

      
    ],
    value: [
      1, 1, 2, 5,	0, 1,	1,
      3, 1, 2, 3, 1, 7, 3,
      0, 0, 3, 0, 1, 1, 3, 0,
      2, 1, 4, 2, 1, 1, 0, 1,
      0, 0, 2, 0,
      0, 0, 1, 0,
      2, 0, 4, 2,
      0, 1, 1, 0,
      1, 0, 1, 0,
      0, 0, 1, 1,
      0, 0, 3, 0,
      0, 0, 0, 1,
      1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 3, 1, 0, 1,
      0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0,




    ],
    color: [
      "#D3D3D390",	"#D3D3D390",	"#D3D3D390",	"#D3D3D390",	"#D3D3D390",	"#D3D3D390",	"#D3D3D390",												
      "#D3D3D390",	"#D3D3D390",	"#D3D3D390",	"#D3D3D390",	"#D3D3D390",	"#D3D3D390",	"#D3D3D390",												
      "#D3D3D390",	"#D3D3D390",	"#D3D3D390",	"#D3D3D390",	"#D3D3D390",	"#D3D3D390",	"#D3D3D390",	"#D3D3D390",											
      "#D3D3D390",	"#D3D3D390",	"#D3D3D390",	"#D3D3D390",	"#D3D3D390",	"#D3D3D390",	"#D3D3D390",	"#D3D3D390",											
      "#D3D3D390",	"#D3D3D390",	"#D3D3D390",	"#D3D3D390",															
      "#D3D3D390",	"#D3D3D390",	"#D3D3D390",	"#D3D3D390",															
      "#D3D3D390",	"#D3D3D390",	"#D3D3D390",	"#D3D3D390",															
      "#D3D3D390",	"#D3D3D390",	"#D3D3D390",	"#D3D3D390",															
      "#D3D3D390",	"#D3D3D390",	"#D3D3D390",	"#D3D3D390",															
      "#D3D3D390",	"#D3D3D390",	"#D3D3D390",	"#D3D3D390",															
      "#D3D3D390",	"#D3D3D390",	"#D3D3D390",	"#D3D3D390",															
      "#D3D3D390",	"#D3D3D390",	"#D3D3D390",	"#D3D3D390",															
      "#D3D3D390",	"#D3D3D390",	"#D3D3D390",	"#D3D3D390",	"#D3D3D390",	"#D3D3D390",	"#D3D3D390",	"#D3D3D390",	"#D3D3D390",	"#D3D3D390",	"#D3D3D390",	"#D3D3D390",	"#D3D3D390",	"#D3D3D390",	"#D3D3D390",	"#D3D3D390",	"#D3D3D390",	"#D3D3D390",
      "#D3D3D390",	"#D3D3D390",	"#D3D3D390",	"#D3D3D390",	"#D3D3D390",	"#D3D3D390",	"#D3D3D390",	"#D3D3D390",	"#D3D3D390",	"#D3D3D390",	"#D3D3D390",	"#D3D3D390",	"#D3D3D390",	"#D3D3D390",	"#D3D3D390",	"#D3D3D390",	"#D3D3D390",	"#D3D3D390",
      "#D3D3D390",	"#D3D3D390",	"#D3D3D390",	"#D3D3D390",	"#D3D3D390",	"#D3D3D390",	"#D3D3D390",	"#D3D3D390",	"#D3D3D390",	"#D3D3D390",	"#D3D3D390",	"#D3D3D390",	"#D3D3D390",	"#D3D3D390",	"#D3D3D390",	"#D3D3D390",	"#D3D3D390",	"#D3D3D390",
      "#D3D3D390",	"#D3D3D390",	"#D3D3D390",	"#D3D3D390",	"#D3D3D390",	"#D3D3D390",	"#D3D3D390",	"#D3D3D390",	"#D3D3D390",	"#D3D3D390",	"#D3D3D390",	"#D3D3D390",	"#D3D3D390",	"#D3D3D390",	"#D3D3D390",	"#D3D3D390",	"#D3D3D390",	"#D3D3D390",
      "#D3D3D390",	"#D3D3D390",	"#D3D3D390",	"#D3D3D390",	"#D3D3D390",	"#D3D3D390",	"#D3D3D390",	"#D3D3D390",	"#D3D3D390",	"#D3D3D390",	"#D3D3D390",	"#D3D3D390",	"#D3D3D390",	"#D3D3D390",	"#D3D3D390",	"#D3D3D390",	"#D3D3D390",	"#D3D3D390",
      "#D3D3D390",	"#D3D3D390",	"#D3D3D390",	"#D3D3D390",	"#D3D3D390",	"#D3D3D390",	"#D3D3D390",	"#D3D3D390",	"#D3D3D390",	"#D3D3D390",	"#D3D3D390",	"#D3D3D390",	"#D3D3D390",	"#D3D3D390",	"#D3D3D390",	"#D3D3D390",	"#D3D3D390",	"#D3D3D390",
												

    ],
    hovertemplate: '<span style="text-transform: none">%{value} %{source.label} alumni<br><span style="font-size:16px">&#8594;</span>%{target.label}</span> <extra></extra>',
  },
};
