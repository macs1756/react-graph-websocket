import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function Graph() {
  const [isConnected, setIsConnected] = useState(false);
  const [lineCrartArray, setLineCrartArray] = useState([])

  useEffect(() => {
    const newSocket = io('http://localhost:80');

    newSocket.on('connect', () => {
      setIsConnected(true);
    });

    newSocket.on('disconnect', () => {
      setIsConnected(false);
    });

    newSocket.on('graph', data => {

      if(data){
        setLineCrartArray(prev => [...prev, data])
      }
     
    });


    return () => {
      newSocket.disconnect();
    };
  }, []);


  const options = {
    responsive: true,
    plugins: {
     
      legend: {
        position: 'top',
      },
      title: {
        display: false,
        text: 'Chart.js Line Chart',
      },
    },
  };

  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  const data = {
    labels: lineCrartArray, 
    datasets: [
      {
        label: 'Example 1',
        data: lineCrartArray,
        borderColor: '#eab40a',
        fill: false,
        backgroundColor: '#eab40a',
        borderWidth: 1
      },
    ],
  }

  return (
    <div>
      <p>Socket is connected: {isConnected ?
        <div className='wr'>
          <Line options={options} data={data} />
        </div>


        : 'Socket is connected: No'}</p>
    </div>
  );
}

export default Graph;
