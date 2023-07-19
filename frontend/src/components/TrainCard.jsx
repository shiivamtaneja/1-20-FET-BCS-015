import React from 'react'

import { Link } from 'react-router-dom';

const TrainCard = ({ train }) => {
  const { trainName, trainNumber, departureTime, seatsAvailable, price, delayedBy } = train;

  const formatTime = (time) => {
    return `${time.Hours.toString().padStart(2, '0')}:${time.Minutes.toString().padStart(2, '0')}`;
  };

  return (
    <Link to={`/${trainNumber}`}>
      <div className="md:w-1/4 w-full p-2 flex flex-col border-[2px] m-2 px-4 rounded-lg">
        <div className='' >
          <h2>{trainName}</h2>
          <p>Train Number: {trainNumber}</p>
          <p className="text-gray-600">Price:</p>
          <p className="text-gray-600">Sleeper: ₹{price.sleeper}</p>
          <p className="text-gray-600">AC: ₹{price.AC}</p>
          <p className="text-gray-600">Train Number: {trainNumber}</p>
          <p className="text-gray-600">Departure Time: {formatTime(departureTime)}</p>
          <p className="text-gray-600">Delayed By: {delayedBy} minutes</p>
          <p className="text-gray-600">Seats Available:</p>
          <p className="text-gray-600">Sleeper: {seatsAvailable.sleeper}</p>
          <p className="text-gray-600">AC: {seatsAvailable.AC}</p>
        </div>
      </div>
    </Link>
  )
}

export default TrainCard