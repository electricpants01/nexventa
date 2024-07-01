import React, { useEffect, useState } from 'react';
import type { EarningData } from '@interfaces/Earning';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, LinearScale, Title, CategoryScale, Tooltip, type ChartData } from 'chart.js';

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Tooltip
);

const EarningDataComponent: React.FC = () => {
  const [data, setData] = useState<ChartData<'line'> | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchDataAndDrawChart = async () => {
      try {
        const response = await fetch('https://d1z4q162bb7vdj.cloudfront.net/api/earning.json');
        if (!response.ok) {
          throw new Error(`Error al cargar los datos. Estado: ${response.status} ${response.statusText}`);
        }
        const earningData: EarningData = await response.json();
        console.log('EarningData:', earningData);
        if (!earningData.data || !Array.isArray(earningData.data)) {
          throw new Error('El formato de los datos de ganancias es inválido');
        }
        setData({
          labels: earningData.labels,
          datasets: earningData.data.map((dataset, index) => ({
            label: `Dataset ${index + 1}`,
            data: dataset.data,
            borderColor: index === 0 ? 'rgba(1, 212, 146, 1)' : 'rgba(197, 69, 89, 1)',
            backgroundColor: 'rgba(255, 255, 255, 0.6)',
            borderWidth: 2,
            pointRadius: 0,
            tension: 0.4,
            fill: false
          }))
        });
      } catch (err: any) {
        console.error('Error al obtener los datos de la API:', err.message);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDataAndDrawChart();
  }, []);

  if (isLoading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return data ? (
    <div style={{ width: '100%', maxWidth: '600px', height: '250px' }}>
      <Line
        data={data}
        options={{
          maintainAspectRatio: false,
          responsive: true,
          plugins: {
            legend: { display: true }
          },
          scales: {
            y: {
              ticks: { color: '#AEAFBB' },
              grid: { display: true, color: 'rgba(174, 175, 187, 0.1)' }
            },
            x: { ticks: { color: '#AEAFBB' }, grid: { display: false } }
          }
        }}
      />
    </div>
  ) : null;
};

export default EarningDataComponent;
