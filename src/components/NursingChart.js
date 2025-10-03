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

function NursingChart() {
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
            data: [114239, 114981, 115723, 116465, 117207, 117949, 118691, 119433, 120175, 120917, 121659, 122401, 123143, 123885, 124627, 125369],
            borderColor: '#059669',
            backgroundColor: 'rgba(5, 150, 105, 0.1)',
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
                text: 'Jobs',
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
        <div className={styles.chartTitle}>Nursing</div>
        <div className={styles.chartSubtitle}>CIP 51.38 - Registered Nurses, Nurse Practitioners, and Licensed Practical Nurses</div>
        <canvas ref={chartRef}></canvas>
        <div className={styles.stats}>
          <div className={styles.stat}>
            <div className={styles.statLabel}>2020-2030 Growth</div>
            <div className={styles.statValue}>+6.3%</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statLabel}>Annual Openings</div>
            <div className={styles.statValue}>~5,614</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statLabel}>Weighted Avg Wage</div>
            <div className={styles.statValue}>$37.41/hr</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NursingChart;