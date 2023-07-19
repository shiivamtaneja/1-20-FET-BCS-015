import React, { useEffect, useState } from 'react'

import TrainCard from './TrainCard'

import { trainData } from './constants.js'

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(trainData);
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