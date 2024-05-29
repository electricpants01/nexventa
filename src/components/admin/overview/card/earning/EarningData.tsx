import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Tooltip,
  type ChartData,
} from 'chart.js';

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Tooltip
);

interface EarningData {
  xValues: number[];
  y1Values: number[];
  y2Values: number[];
}

const EarningData: React.FC = () => {
  const [data, setData] = useState<ChartData<'line'> | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchDataAndDrawChart() {
      try {
        const response = await fetch('/api/earning.json');
        if (response.ok) {
          const data: EarningData = await response.json();
          if (data) {
            setData({
              labels: data.xValues,
              datasets: [
                {
                  label: 'Dataset 1',
                  borderColor: 'rgba(1, 212, 146, 1)',
                  backgroundColor: 'rgba(255, 255, 255, 0.6)', // Opacidad blanco
                  borderWidth: 2,
                  data: data.y1Values,
                  pointRadius: 0,
                  tension: 0.4,
                  fill: false
                },
                {
                  label: 'Dataset 2',
                  borderColor: 'rgba(197, 69, 89, 1)',
                  backgroundColor: 'rgba(255, 255, 255, 0.6)', // Opacidad blanco
                  borderWidth: 2,
                  data: data.y2Values,
                  pointRadius: 0,
                  tension: 0.4,
                  fill: false
                }
              ]
            });
          } else {
            throw new Error('La respuesta está vacía');
          }
        } else if (response.status === 400) {
          throw new Error('Error: Solicitud incorrecta (400)');
        } else if (response.status === 404) {
          throw new Error('Error: Recurso no encontrado (404)');
        } else if (response.status === 500) {
          throw new Error('Error: Error interno del servidor (500)');
        } else {
          throw new Error(
            'Error al cargar los datos. Estado: ' + response.status + ' ' + response.statusText
          );
        }
      } catch (err: any) {
        console.error('Error al obtener los datos de la API:', err.message);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchDataAndDrawChart();
  }, []);

  if (isLoading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return data ? (
    <div style={{ width: '100%', maxWidth: '600px',height:'200px' }}> {/* Ancho máximo y responsive */}
      <Line
        data={data}
        options={{
          maintainAspectRatio: false,
          responsive: true,
          plugins: {
            legend: {
              display: false
            }
          },
          scales: {
            y: {
              ticks: {
                color: '#AEAFBB'
              },
              grid: {
                display: true,
                color: 'rgba(174, 175, 187, 0.1)'
              }
            },
            x: {
              ticks: {
                color: '#AEAFBB'
              },
              grid: {
                display: false
              }
            }
          }
        }}
      />
    </div>
  ) : null;
};

export default EarningData;
