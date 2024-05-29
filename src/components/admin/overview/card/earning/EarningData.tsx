import React, { useEffect, useState } from 'react';
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

interface EarningData {
  labels: number[];
  datasets: {
    label: string;
    borderColor: string;
    backgroundColor: string;
    borderWidth: number;
    data: number[];
    pointRadius: number;
    tension: number;
    fill: boolean;
  }[];
}

const EarningData: React.FC = () => {
  const [data, setData] = useState<ChartData<'line'> | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchDataAndDrawChart = async () => {
      try {
        const response = await fetch('/api/earning.json');
        if (!response.ok) {
          throw new Error(`Error al cargar los datos. Estado: ${response.status} ${response.statusText}`);
        }
        const earningData: EarningData = await response.json();
        setData({
          labels: earningData.labels,
          datasets: earningData.datasets.map(dataset => ({
            ...dataset,
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
    <div style={{ width: '100%', maxWidth: '600px', height: '200px' }}>
      <Line
        data={data}
        options={{
          maintainAspectRatio: false,
          responsive: true,
          plugins: {
            legend: { display: false }
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

export default EarningData;
