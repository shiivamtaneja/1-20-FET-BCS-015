import React, { useEffect, useState } from 'react'

import TrainCard from './TrainCard'

import axios from 'axios';

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const getTrains = async () => {
      const { data } = await axios.get("http://localhost:8000/api/trains", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setData(data);
    };

    if (token) {
      getTrains();
    }
  }, []);
  return (
    <div className="flex flex-wrap">
      {data?.map((train, index) => (
        <TrainCard key={index} train={train} />
      ))}
    </div>

  )
}

export default Home