import React from 'react'
import './RoomCard.scss'
import Temperature from '../temperature/Temperature';

const RoomCard = ({ room }) => {
  console.log("room", room);
  return (
    <div className='room'>
      <h6>Room Id: {room.id}</h6>
     
     <Temperature room={room}/>
    </div>
  )
}

export default RoomCard
