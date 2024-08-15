
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const Chart = ({ id, data, options, initialPosition = { left: 0, top: 0 } }) => {
  return (
    <div
      id={id}
      className="p-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg shadow-lg"
      style={{
        position: 'absolute',
        left: initialPosition.left,
        top: initialPosition.top,
        width: '300px', // Adjust as needed
        height: '200px', // Adjust as needed
      }}
    >
      <Line data={data} options={options} />
    </div>
  );
};

export default Chart;
