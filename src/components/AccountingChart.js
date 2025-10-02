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

function AccountingChart() {
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
            data: [30200, 30500, 30800, 31100, 31600, 32077, 32436, 32795, 33154, 33513, 33872, 34077, 34282, 34487, 34682, 33877],
            borderColor: '#2563eb',
            backgroundColor: 'rgba(37, 99, 235, 0.1)',
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
        <div className={styles.chartTitle}>Accounting</div>
        <div className={styles.chartSubtitle}>Accountants and Auditors</div>
        <canvas ref={chartRef}></canvas>
        <div className={styles.stats}>
          <div className={styles.stat}>
            <div className={styles.statLabel}>2020-2030 Growth</div>
            <div className={styles.statValue}>+5.6%</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statLabel}>Annual Openings</div>
            <div className={styles.statValue}>~1,200</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statLabel}>Median Wage</div>
            <div className={styles.statValue}>$37.36/hr</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountingChart;