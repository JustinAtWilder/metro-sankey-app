import { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  LineController,
  Tooltip,
  Filler
} from 'chart.js';
import styles from './LaborChart.module.css';

// Register Chart.js components
Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  LineController,
  Tooltip,
  Filler
);

function EducationChart() {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  const params = useParams();

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');

      // Destroy existing chart if it exists
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      chartInstance.current = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025', '2026', '2027', '2028', '2029', '2030'],
          datasets: [{
            data: [23500, 23700, 23900, 24050, 24220, 24393, 24485, 24577, 24669, 24761, 24946, 25038, 25131, 25223, 25270, 25317],
            borderColor: '#0087a9',
            backgroundColor: 'rgba(0, 83, 110, 0.1)',
            borderWidth: 2,
            fill: true,
            tension: 0.3,
            segment: {
              borderDash: (ctx) => ctx.p0DataIndex >= 5 ? [5, 5] : undefined
            }
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          plugins: {
            legend: {
              display: false
            },
            tooltip: {
              callbacks: {
                label: function(context) {
                  return context.parsed.y.toLocaleString() + ' jobs';
                }
              }
            }
          },
          scales: {
            y: {
              beginAtZero: false,
              ticks: {
                callback: function(value) {
                  return value.toLocaleString();
                }
              },
              title: {
                display: true,
                text: 'Jobs', // <-- Your y-axis label
                font: {
                  size: 14,
                  weight: 'bold'
                }
              }
            }
          }
        }
      });
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
        chartInstance.current = null;
      }
    };
  }, [params]);

  return (
    <div className={styles.container}>
      <div className={styles.chartContainer}>
        <div className={styles.chartTitle}>Education</div>
        <div className={styles.chartSubtitle}>Elementary School Teachers (Except Special Education)</div>
        <canvas ref={chartRef}></canvas>
        <div className={styles.stats}>
          <div className={styles.stat}>
            <div className={styles.statLabel}>2020-2030 Growth</div>
            <div className={styles.statValue}>+3.8%</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statLabel}>Annual Openings</div>
            <div className={styles.statValue}>~927</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statLabel}>Median Wage</div>
            <div className={styles.statValue}>Varies</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EducationChart;