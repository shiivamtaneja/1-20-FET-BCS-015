import { Box, Grid } from '@mui/material';
import React from 'react'

const TrainCard = ({ train }) => {
  const { trainName, trainNumber, departureTime, seatsAvailable, price, delayedBy } = train;

  const formatTime = (time) => {
    return `${time.Hours.toString().padStart(2, '0')}:${time.Minutes.toString().padStart(2, '0')}`;
  };


  return (
    <>
      <div className="md:w-1/2 lg:w-1/3 pr-2 pb-4 py-6 flex flex-col gap-1 border-[2px] border-t-0 px-4 rounded-b-lg">
        <div className='' >
          <h2>{trainName}</h2>
          <p>Train Number: {trainNumber}</p>
          <p className="text-red-500">Price:</p>
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
    </>
  )
}

export default TrainCard