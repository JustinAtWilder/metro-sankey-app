export const accountingData = {
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
        // Majors (0:9)
        'Accounting', 'Business Administration', 'English', 'Finance', 'History', 'International Business', 'Liberal Studies', 'Management', 'Public and Nonprofit Administration', 'Social Work',
        // Internships (10:12)
        'Did an Internship', 'No intership', 'Not sure',
        //Industry (13:22)
        'Finance and Insurance', 'Healthcare and Social Assistance', 'Information and Data', 'Manufacturing', 'Other', 'Professional, Scientific and Technical Services', 'Public Administration', 'Retail and Wholesale Trade', 'Telecommunications', 'Utilities',
        //Job level (23:26)
        'Entry Level', 'First Level Management', 'Intermediate or<br>Experienced Level','Middle Level<br>Management',
        // Job title (27:52)
        'Accountant',	'Accounting Consultant',	'Accounting Specialist',	'Accounting Technician',	'Accounts Payable/Receivable',	'Assistant Controller',	'Budget Director', 'Capital Markets Liquidity<br>and Portfolio Analyst',	'Controller',	'Director',	'Director of Finance',	'Finance Administrative<br>Specialist',	'Finance and Accounting Analyst',	'Finance Coordinator',	'Financial Analyst',	'Financial Consultant',	'Financial Systems Manager',	'Financial Systems Project Manager',	'Internal Controls Specialist',	'Manager, Tax Proposal Operations',	'Reimbursement manager',	'Senior Accountant',	'Senior Accounting Manager',	'Senior Analyst II',	'Senior Internal Auditor Analyst',	'Structured Finance Analyst',
          ],
          color: [
        // Colors for each node (you can customize these)
        '#006275','#006275','#006275','#006275','#006275','#006275','#006275','#006275','#006275','#006275',
        '#006275','#006275','#006275',
        '#006275','#006275','#006275','#006275','#006275','#006275','#006275','#006275','#006275','#006275',
        '#006275','#006275','#006275','#006275',
        '#006275','#006275','#006275','#006275','#006275','#006275','#006275','#006275','#006275','#006275','#006275','#006275','#006275','#006275','#006275','#006275','#006275','#006275','#006275','#006275','#006275','#006275','#006275','#006275','#006275','#006275',
        ],
    },
    link: {
      source: [
       0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
       0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
       0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
       10,10,10,10,10,10,10,10,10,10,
       11,11,11,11,11,11,11,11,11,11,
       12,12,12,12,12,12,12,12,12,12,
       13,14,15,16,17,18,19,20,21,22,
       13,14,15,16,17,18,19,20,21,22,
       13,14,15,16,17,18,19,20,21,22,
       13,14,15,16,17,18,19,20,21,22,
       23,24,25,26,
       23,24,25,26,
       23,24,25,26,
       23,24,25,26,
       23,24,25,26,
       23,24,25,26,
       23,24,25,26,
       23,24,25,26,
       23,24,25,26,
       23,24,25,26,
       23,24,25,26,
       23,24,25,26,
       23,24,25,26,
       23,24,25,26,
       23,24,25,26,
       23,24,25,26,
       23,24,25,26,
       23,24,25,26,
       23,24,25,26,
       23,24,25,26,
       23,24,25,26,
       23,24,25,26,
       23,24,25,26,
       23,24,25,26,
       23,24,25,26,
       23,24,25,26,
  
      ],
      target: [
       10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
       11, 11, 11, 11, 11, 11, 11, 11, 11, 11,
       12, 12, 12, 12, 12, 12, 12, 12, 12, 12,
       13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
       13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
       13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
       23,23,23,23,23,23,23,23,23,23,
       24,24,24,24,24,24,24,24,24,24,
       25,25,25,25,25,25,25,25,25,25,
       26,26,26,26,26,26,26,26,26,26,
       27,27,27,27,
       28,28,28,28,
       29,29,29,29,
       30,30,30,30,
       31,31,31,31,
       32,32,32,32,
       33,33,33,33,
       34,34,34,34,
       35,35,35,35,
       36,36,36,36,
       37,37,37,37,
       38,38,38,38,
       39,39,39,39,
       40,40,40,40,
       41,41,41,41,
       42,42,42,42,
       43,43,43,43,
       44,44,44,44,
       45,45,45,45,
       46,46,46,46,
       47,47,47,47,
       48,48,48,48,
       49,49,49,49,
       50,50,50,50,
       51,51,51,51,
       52,52,52,52,
       
       


      ],
      value: [
        //Majors to Internships
        1,0,0,0,0,1,0,0,0,1,
        //Majors to No Internships
        11,5,1,2,1,0,1,1,1,0,
        //Majors to Not sure
        0,1,0,0,0,0,0,0,0,0,

        //Internships to Industry
        2,0,0,0,0,0,0,1,0,0,

        //No Internships to Industry
        6,2,3,4,2,1,2,1,1,1,

        //Not sure to Industry
        0,1,0,0,0,0,0,0,0,0,

        //Industry to Job Level
        0,0,0,1,0,0,0,0,0,0,
        2,1,0,0,0,0,0,0,0,0,
        7,1,2,3,2,0,0,1,1,0,
        0,1,1,0,0,1,2,1,0,1,

        //Job Level to Job Title
        0,	0,	1,	0,
        0,	0,	1,	0,
        0,	0,	1,	0,
        0,	0,	1,	0,
        0,	0,	1,	0,
        0,	1,	0,	0,
        0,	1,	0,	0,
        0,	0,	1,	0,
        0,	0,	0,	1,
        0,	0,	0,	1,
        0,	0,	0,	1,
        1,	0,	0,	0,
        0,	0,	1,	0,
        0,	0,	1,	0,
        0,	0,	1,	0,
        0,	0,	1,	0,
        0,	0,	0,	1,
        0,	0,	1,	0,
        0,	0,	1,	0,
        0,	0,	0,	1,
        0,	0,	0,	1,
        0,	1,	2,	0,
        0,	0,	0,	1,
        0,	0,	1,	0,
        0,	0,	1,	0,
        0,	0,	1,	0,

        

 
      ],
      color: [
        '#FF1DCE80','#D3D3D380','#D3D3D380','#D3D3D380','#D3D3D380','#FF1DCE80','#D3D3D380','#D3D3D380','#D3D3D380','#D3D3D380',
        '#FF1DCE80','#FF1DCE80','#D3D3D380','#FF1DCE80','#D3D3D380','#FF1DCE80','#D3D3D380','#FF1DCE80','#FF1DCE80','#D3D3D380',
        '#D3D3D380','#FF1DCE80','#D3D3D380','#D3D3D380','#D3D3D380','#D3D3D380','#D3D3D380','#D3D3D380','#D3D3D380','#D3D3D380',
        '#FF1DCE80','#FF1DCE80','#FF1DCE80','#FF1DCE80','#FF1DCE80','#FF1DCE80','#FF1DCE80','#FF1DCE80','#FF1DCE80','#FF1DCE80',
        '#FF1DCE80','#FF1DCE80','#D3D3D380','#FF1DCE80','#D3D3D380','#D3D3D380','#D3D3D380','#D3D3D380','#D3D3D380','#D3D3D380',
        '#D3D3D380','#FF1DCE80','#D3D3D380','#D3D3D380','#D3D3D380','#D3D3D380','#D3D3D380','#D3D3D380','#D3D3D380','#D3D3D380',
        '#D3D3D380','#D3D3D380','#D3D3D380','#FF1DCE80','#D3D3D380','#D3D3D380','#D3D3D380','#D3D3D380','#D3D3D380','#D3D3D380',
        '#FF1DCE80','#FF1DCE80','#D3D3D380','#D3D3D380','#D3D3D380','#D3D3D380','#D3D3D380','#D3D3D380','#D3D3D380','#D3D3D380',
        '#FF1DCE80','#FF1DCE80','#D3D3D380','#FF1DCE80','#D3D3D380','#D3D3D380','#D3D3D380','#D3D3D380','#D3D3D380','#D3D3D380',
        '#D3D3D380','#FF1DCE80','#D3D3D380','#FF1DCE80','#D3D3D380','#D3D3D380','#D3D3D380','#FF1DCE80','#D3D3D380','#D3D3D380',
        '#FF1DCE80','#FF1DCE80','#FF1DCE80','#FF1DCE80','#FF1DCE80','#FF1DCE80','#FF1DCE80','#FF1DCE80','#D3D3D380','#D3D3D380',
        '#FF1DCE80','#FF1DCE80','#FF1DCE80','#FF1DCE80','#FF1DCE80','#FF1DCE80','#FF1DCE80','#FF1DCE80','#FF1DCE80','#FF1DCE80',
        '#FF1DCE80','#FF1DCE80','#FF1DCE80','#FF1DCE80','#FF1DCE80','#FF1DCE80','#FF1DCE80','#FF1DCE80','#FF1DCE80','#FF1DCE80',
        '#FF1DCE80','#FF1DCE80','#FF1DCE80','#FF1DCE80','#FF1DCE80','#FF1DCE80','#FF1DCE80','#FF1DCE80','#FF1DCE80','#FF1DCE80',
        '#FF1DCE80','#FF1DCE80','#FF1DCE80','#FF1DCE80',
        '#FF1DCE80','#FF1DCE80','#FF1DCE80','#FF1DCE80',
        '#FF1DCE80','#FF1DCE80','#FF1DCE80','#FF1DCE80',
        '#FF1DCE80','#FF1DCE80','#FF1DCE80','#FF1DCE80',
        '#FF1DCE80','#FF1DCE80','#FF1DCE80','#FF1DCE80',
        '#FF1DCE80','#FF1DCE80','#FF1DCE80','#FF1DCE80',
        '#FF1DCE80','#FF1DCE80','#FF1DCE80','#FF1DCE80',
        '#FF1DCE80','#FF1DCE80','#FF1DCE80','#FF1DCE80',
        '#FF1DCE80','#FF1DCE80','#FF1DCE80','#FF1DCE80',
        '#FF1DCE80','#FF1DCE80','#FF1DCE80','#FF1DCE80',
        '#FF1DCE80','#FF1DCE80','#FF1DCE80','#FF1DCE80',
        '#FF1DCE80','#FF1DCE80','#FF1DCE80','#FF1DCE80',
        '#FF1DCE80','#FF1DCE80','#FF1DCE80','#FF1DCE80',
        '#FF1DCE80','#FF1DCE80','#FF1DCE80','#FF1DCE80',
        '#FF1DCE80','#FF1DCE80','#FF1DCE80','#FF1DCE80',
        '#FF1DCE80','#FF1DCE80','#FF1DCE80','#FF1DCE80',
        '#FF1DCE80','#FF1DCE80','#FF1DCE80','#FF1DCE80',
        '#FF1DCE80','#FF1DCE80','#FF1DCE80','#FF1DCE80',
        '#FF1DCE80','#FF1DCE80','#FF1DCE80','#FF1DCE80',
        '#FF1DCE80','#FF1DCE80','#FF1DCE80','#FF1DCE80',
        '#FF1DCE80','#FF1DCE80','#FF1DCE80','#FF1DCE80',
        '#FF1DCE80','#FF1DCE80','#FF1DCE80','#FF1DCE80',
        '#FF1DCE80','#FF1DCE80','#FF1DCE80','#FF1DCE80',
        '#FF1DCE80','#FF1DCE80','#FF1DCE80','#FF1DCE80',
        '#FF1DCE80','#FF1DCE80','#FF1DCE80','#FF1DCE80',
        '#FF1DCE80','#FF1DCE80','#FF1DCE80','#FF1DCE80',
        
          ],
    }
  };