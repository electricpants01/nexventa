import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

interface EarningData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string[];
  }[];
}

const ExpensesChart = () => {
  const [errorLoadingData, setErrorLoadingData] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [chartData, setChartData] = useState<EarningData | null>(null);

  useEffect(() => {
    fetchDataAndDrawChart();
  }, []);

  async function fetchDataAndDrawChart() {
    try {
      const response = await fetch('/api/expenses.json');
      if (response.ok) {
        const data: EarningData = await response.json();
        if (data) {
          setChartData(data);
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
          'Error al cargar los datos. Estado: ' +
            response.status +
            ' ' +
            response.statusText
        );
      }
    } catch (err: any) {
      console.error('Error al obtener los datos de la API:', err.message);
      setError(err.message);
      setErrorLoadingData(true);
    }
  }

  return (
    <div>
      {errorLoadingData ? (
        <p id="errorMessageExpenses">{error}</p>
      ) : (
        <div>
          {chartData && (
            <div style={{ width: '100%', maxWidth: '400px', height: '200px' }}>
              <Doughnut
                data={{
                  labels: chartData.labels,
                  datasets: [
                    {
                      label: chartData.datasets[0].label,
                      data: chartData.datasets[0].data,
                      backgroundColor: chartData.datasets[0].backgroundColor,
                      borderWidth: 1
                    }
                  ]
                }}
                options={{
                  maintainAspectRatio: false,
                  responsive: true, // Hacer el gráfico responsive
                  cutout: '70%',
                  plugins: {
                    legend: {
                      position: 'right',
                      labels: {
                        boxWidth: 15,
                        padding: 20,
                        usePointStyle: true,
                        font: {
                          size: 10
                        }
                      }
                    }
                  }
                }}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ExpensesChart;
