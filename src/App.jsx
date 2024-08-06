import React, { useEffect, useState } from 'react';
import LineChart from './components/LineChart.jsx';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {

    fetch('src/data.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>My App</h1>
      {data.length > 0 ? <LineChart data={data} /> : <p>Loading...</p>}
    </div>
  );
};

export default App;
