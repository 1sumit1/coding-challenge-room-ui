import React from 'react'
import './BuildingCard.scss'

const BuildingCard = ({data}) => {
  return (
    <>
    <div className='card'>
      <p>Building Name :{data.name}</p>
      <p>Req. Temp:{data.requestedTemperature}&deg;</p> 
    </div>
    </>
  )
}

export default BuildingCard
