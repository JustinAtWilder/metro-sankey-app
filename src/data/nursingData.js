export const nursingData = {
  type: 'sankey',
  orientation: 'h',
  valueformat: '',
  
  node: {
    pad: 15,
    thickness: 30,
    line: {
      color: '#D3D3D380',
      width: 0.5
    },
    label: [
      'Nursing BSN', 'Nursing MSN', 'Nursing Practice DNP', 'Nursing Science MSN',
      'Internship', 'No Internship', 'Not sure',
      'Educational Services', 'Health Care and Social Assistance',
      'Entry Level', 'Intermediate<br>or Experienced Level', 'Middle Level Management',
      'Critical Care<br>Nurse Practitioner', 'Nurse', 'Nurse Anesthetist', 'Nurse Practitioner', 'Psychiatric Nurse Practitioner', 'Psychiatric Provider', 'Public Health Nurse', 'Registered Nurse', 'Registered Nurse<br>and Clinical Educator',
    ],
    color: [
      '#006275', '#006275', '#006275', '#006275', 
      '#006275', '#006275', '#006275',
      '#006275', '#006275',
      '#006275', '#006275', '#006275',
      '#006275', '#006275', '#006275', '#006275', '#006275', '#006275', '#006275', '#006275', '#006275',
 ],
    hovertemplate: '<span style="text-transform: none">%{value} %{label} alumni</span> <extra></extra>',
  },
  link: {
    source: [
      0, 1, 2, 3,
      0, 1, 2, 3,
      0, 1, 2, 3, 
      4, 4, 
      5, 5, 
      6, 6, 
      7, 7, 7, 
      8, 8, 8,
      9, 9, 9, 9, 9, 9, 9, 9, 9, 
      10, 10, 10, 10, 10, 10, 10, 10, 10, 
      11, 11, 11, 11, 11, 11, 11, 11, 11, 
    ],
    target: [
      4, 4, 4, 4, 
      5, 5, 5, 5,
      6, 6, 6, 6, 
      7, 8, 
      7, 8, 
      7, 8, 
      9, 10, 11, 
      9, 10, 11, 
      12, 13, 14, 15, 16, 17, 18, 19, 20,
      12, 13, 14, 15, 16, 17, 18, 19, 20,
      12, 13, 14, 15, 16, 17, 18, 19, 20,


    ],
    value: [
      7, 3, 0, 3, 
      14, 0, 0, 3, 
      0, 0, 0, 1,
      1, 9, 
      0, 9, 
      0, 1, 
      0, 1, 0, 
      2, 15, 3, 
      0, 0, 0, 0, 0, 0, 0, 2, 0, 
      1, 1, 1, 0, 1, 0 ,2, 9, 1, 
      0, 0, 0, 1, 0, 1, 0, 1, 0,   

    ],
    color: [
				'#D3D3D380', '#D3D3D380', '#D3D3D380', '#D3D3D380', 
        '#D3D3D380', '#D3D3D380', '#D3D3D380', '#D3D3D380', 
        '#D3D3D380', '#D3D3D380', '#D3D3D380', '#D3D3D380', 
        '#D3D3D380', '#D3D3D380', 
        '#D3D3D380', '#D3D3D380', 
        '#D3D3D380', '#D3D3D380',
        '#D3D3D380', '#D3D3D380', '#D3D3D380',
        '#D3D3D380', '#D3D3D380', '#D3D3D380', 
        '#D3D3D380', '#D3D3D380', '#D3D3D380', '#D3D3D380', '#D3D3D380', '#D3D3D380', '#D3D3D380', '#D3D3D380', '#D3D3D380',
        '#D3D3D380', '#D3D3D380', '#D3D3D380', '#D3D3D380', '#D3D3D380', '#D3D3D380', '#D3D3D380', '#D3D3D380', '#D3D3D380', 
        '#D3D3D380', '#D3D3D380', '#D3D3D380', '#D3D3D380', '#D3D3D380', '#D3D3D380', '#D3D3D380', '#D3D3D380', '#D3D3D380',  
        																										

    ],
    hovertemplate: '<span style="text-transform: none">%{value} %{source.label} alumni<br><span style="font-size:16px">&#8594;</span>%{target.label}</span> <extra></extra>',
  },
};
