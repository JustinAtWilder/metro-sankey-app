export const cybersecurityData = {
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
        // Majors (13; 0:12)
        'Accounting', 'Biology', 'Computer Information Systems', 'Computer Information Technology', 'Computer Science', 
        'Creative Writing', 'Criminal Justice', 'Individualized Studies','Management Information Systems', 'Marketing', 
        'Philosophy', 'Technical Communication', 'Urban Elementary Education',
        // Internships (2; 13:14)
        'Did an Internship', 'No intership',
        //Industry (10; 15:24)
        'Arts, Entertainment, and Recreation', 'Educational Services', 'Finance and Insurance', 'Information and Data', 'Management of<br>Companies and Enterprises',
         'Manufacturing', 'Other', 'Professional, Scientific,<br>and Technical Services', 'Public Administration', 'Retail and Wholesale Trade',
        //Job level (4; 25:28)
        'Entry Level', 'First Level Management', 'Intermediate or<br>Experienced Level', 'Middle Level Management', 
        // Job title (18; 29:46)
        "Application Analyst",	"Application Developer",	"Application Programmer",	"Content Designer",	"Customs and Border Protection Officer",	
        "Data Coordinator",	"Data Manager",	"Lead JavaScript Engineer",	"Network Analyst",	"Ops manager",	"Principal Data Scientist",	
        "Senior Business Software Analyst",	"Senior software engineer",	"Senior Systems Analyst",	"Software Developer",	"Software Engineer",	
        "Software Engineer II",	"Systems Architect/Solution Architect",

  
          ],
          // Node colors
          color: ['#006275','#006275','#711A27','#711A27','#711A27','#006275','#006275','#006275','#006275','#006275','#006275','#711A27','#006275',
                  '#711A27','#711A27',
                  '#006275','#006275','#006275','#711A27','#006275','#006275','#711A27','#711A27','#006275','#006275',
                  '#711A27','#711A27','#711A27','#711A27',
                  '#711A27','#711A27','#711A27','#711A27','#711A27','#711A27','#711A27','#711A27','#711A27','#711A27','#711A27','#711A27','#711A27','#711A27','#711A27','#711A27','#711A27','#711A27',
                  

         ],
    },
    link: {
      source: [0,1,2,3,4,5,6,7,8,9,10,11,12,
               0,1,2,3,4,5,6,7,8,9,10,11,12,
               13,13,13,13,13,13,13,13,13,13,
               14,14,14,14,14,14,14,14,14,14,
               15,15,15,15,
               16,16,16,16,
               17,17,17,17,
               18,18,18,18,
               19,19,19,19,
               20,20,20,20,
               21,21,21,21,
               22,22,22,22,
               23,23,23,23,
               24,24,24,24,
               25,25,25,25,25,25,25,25,25,25,25,
               25,25,25,25,25,25,25,
               26,26,26,26,26,26,26,26,26,26,26,
               26,26,26,26,26,26,26,
               27,27,27,27,27,27,27,27,27,27,27,
               27,27,27,27,27,27,27,
               28,28,28,28,28,28,28,28,28,28,28,
               28,28,28,28,28,28,28,
      ],
      target: [13,13,13,13,13,13,13,13,13,13,13,13,13,
               14,14,14,14,14,14,14,14,14,14,14,14,14,
               15,16,17,18,19,20,21,22,23,24,
               15,16,17,18,19,20,21,22,23,24,
               25,26,27,28,
               25,26,27,28,
               25,26,27,28,
               25,26,27,28,
               25,26,27,28,
               25,26,27,28,
               25,26,27,28,
               25,26,27,28,
               25,26,27,28,
               25,26,27,28,
               29,30,31,32,33,34,35,36,37,38,39,
               40,41,42,43,44,45,46,
               29,30,31,32,33,34,35,36,37,38,39,
               40,41,42,43,44,45,46,
               29,30,31,32,33,34,35,36,37,38,39,
               40,41,42,43,44,45,46,
               29,30,31,32,33,34,35,36,37,38,39,
               40,41,42,43,44,45,46,
               
      ],
value: [
  0, 0, 1, 1, 4, 0, 1, 0, 0, 0, 0, 0, 1, // 0-12
  1, 1, 0, 1, 2, 1, 0, 1, 2, 1, 1, 1, 0, // 13-25
  0, 1, 0, 3, 0, 1, 2, 1, 0, 0,          // 26-35
  1, 0, 1, 2, 2, 1, 0, 3, 1, 1,          // 36-45
  0, 0, 1, 0,                            // 46-49
  0, 0, 1, 0,                            // 50-53
  0, 0, 1, 0,                            // 54-57
  2, 1, 2, 1,                            // 58-61
  0, 1, 1, 0,                            // 62-65
  1, 0, 1, 0,                            // 66-69
  0, 0, 2, 0,                            // 70-73
  0, 0, 4, 0,                            // 74-77
  0, 0, 1, 0,                            // 78-81
  0, 0, 1, 0,                            // 82-85
  0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,    // 86-97
  0, 0, 1, 0, 0, 0,                      // 98-103
  0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0,    // 104-115
  0, 0, 0, 0, 0, 0,                      // 116-121
  1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1,    // 122-133
  1, 1, 0, 3, 1, 1,                      // 134-139
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,    // 140-151
  1, 0, 0, 0, 0, 0                       // 152-157
],
      // Flow colors
      color: ['#D3D3D380', '#D3D3D380','#E03C3180','#E03C3180','#E03C3180','#D3D3D380','#D3D3D380','#D3D3D380','#D3D3D380','#D3D3D380','#D3D3D380','#D3D3D380','#D3D3D380',
        '#D3D3D380','#D3D3D380','#E03C3180','#E03C3180','#E03C3180','#D3D3D380','#D3D3D380','#D3D3D380','#D3D3D380','#D3D3D380','#D3D3D380','#E03C3180','#D3D3D380',
        '#D3D3D380','#D3D3D380','#D3D3D380','#E03C3180','#D3D3D380','#D3D3D380','#E03C3180','#E03C3180','#D3D3D380','#D3D3D380',
        '#D3D3D380','#D3D3D380','#D3D3D380','#E03C3180','#D3D3D380','#D3D3D380','#E03C3180','#E03C3180','#D3D3D380','#D3D3D380',
        '#D3D3D380','#D3D3D380','#D3D3D380','#D3D3D380',
        '#D3D3D380','#D3D3D380','#D3D3D380','#D3D3D380',
        '#D3D3D380','#D3D3D380','#D3D3D380','#D3D3D380',
        '#E03C3180','#E03C3180','#E03C3180','#E03C3180',
        '#D3D3D380','#D3D3D380','#D3D3D380','#D3D3D380',
        '#D3D3D380','#D3D3D380','#D3D3D380','#D3D3D380',
        '#D3D3D380','#D3D3D380','#D3D3D380','#D3D3D380',
        '#D3D3D380','#D3D3D380','#E03C3180','#D3D3D380',
        '#D3D3D380','#D3D3D380','#D3D3D380','#D3D3D380',
        '#D3D3D380','#D3D3D380','#D3D3D380','#D3D3D380',
        '#E03C3180','#E03C3180','#E03C3180','#E03C3180','#E03C3180','#E03C3180','#E03C3180','#E03C3180','#E03C3180','#E03C3180','#E03C3180','#E03C3180','#E03C3180','#E03C3180',
        '#E03C3180','#E03C3180','#E03C3180','#E03C3180','#E03C3180','#E03C3180','#E03C3180','#E03C3180','#E03C3180','#E03C3180','#E03C3180','#E03C3180','#E03C3180','#E03C3180',
        '#E03C3180','#E03C3180','#E03C3180','#E03C3180','#E03C3180','#E03C3180','#E03C3180','#E03C3180','#E03C3180','#E03C3180','#E03C3180','#E03C3180','#E03C3180','#E03C3180',
        '#E03C3180','#E03C3180','#E03C3180','#E03C3180','#E03C3180','#E03C3180','#E03C3180','#E03C3180','#E03C3180','#E03C3180','#E03C3180','#E03C3180','#E03C3180','#E03C3180',
        '#E03C3180','#E03C3180','#E03C3180','#E03C3180','#E03C3180','#E03C3180','#E03C3180','#E03C3180','#E03C3180','#E03C3180','#E03C3180','#E03C3180','#E03C3180','#E03C3180',
        '#E03C3180','#E03C3180','#E03C3180','#E03C3180','#E03C3180','#E03C3180','#E03C3180','#E03C3180','#E03C3180','#E03C3180','#E03C3180','#E03C3180','#E03C3180','#E03C3180',

      ]
    }
  };