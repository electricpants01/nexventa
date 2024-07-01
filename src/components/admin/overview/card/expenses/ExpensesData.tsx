import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import type { ExpensesData } from '@interfaces/Expenses'; // Importa solo el tipo

ChartJS.register(ArcElement, Tooltip, Legend);

const ExpensesChart: React.FC = () => {
  const [errorLoadingData, setErrorLoadingData] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [chartData, setChartData] = useState<ExpensesData | null>(null);

  useEffect(() => {
    fetchDataAndDrawChart();
  }, []);

  async function fetchDataAndDrawChart() {
    try {
      const response = await fetch('https://d1z4q162bb7vdj.cloudfront.net/api/expenses.json');
      if (!response.ok) {
        handleErrors(response);
        return;
      }
      const data = await response.json();
      console.log('Datos recibidos:', data);

      // Usar optional chaining para validar la estructura de los datos
      if (!(data?.labels?.length && data?.data?.length && data?.backgroundColor?.length)) {
        throw new Error('Formato de datos de gastos es inválido');
      }

      const formattedData: ExpensesData = {
        labels: data.labels,
        datasets: [
          {
            label: 'Expenses',
            data: data.data,
            backgroundColor: data.backgroundColor,
          },
        ],
      };
      setChartData(formattedData);
    } catch (err: any) {
      console.error('Error al obtener los datos de la API:', err.message);
      setError(err.message);
      setErrorLoadingData(true);
    }
  }

  function handleErrors(response: Response) {
    switch (response.status) {
      case 400:
        throw new Error('Error: Solicitud incorrecta (400)');
      case 404:
        throw new Error('Error: Recurso no encontrado (404)');
      case 500:
        throw new Error('Error: Error interno del servidor (500)');
      default:
        throw new Error(`Error al cargar los datos. Estado: ${response.status} ${response.statusText}`);
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
                data={chartData}
                options={{
                  maintainAspectRatio: false,
                  responsive: true,
                  cutout: '70%',
                  plugins: {
                    legend: {
                      position: 'right',
                      labels: {
                        boxWidth: 15,
                        padding: 20,
                        usePointStyle: true,
                        font: {
                          size: 10,
                        },
                      },
                    },
                  },
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
