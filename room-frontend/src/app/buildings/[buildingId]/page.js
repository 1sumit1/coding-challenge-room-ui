"use client"
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import RoomCard from '@/components/roomCard/RoomCard'
import '../../buildings/buildings.scss';

const SingleBuildingPage = () => {
    const[RoomData,setRoomData]=useState([])
    const params=useParams();
    
    
    useEffect(()=>{
        const fetchSingleBuilding=async()=>{
            try {
                const response=await axios.get(`http://localhost:8800/api/buildings/${params.buildingId}`)
                setRoomData(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchSingleBuilding();
    },[])

  return (
    <div className=''>
      <div className='dashboard'>
        <h2 className='title'>Building Name : {RoomData.name}</h2>
        {/* <button className='btn' onClick={handlePopup}>Add New Room</button> */}
      </div>
      <div className='buildings'>
        {
          RoomData?.rooms?.map((room)=>{
            return(
                <div className='items'>
                    <RoomCard room={room}/>
                    </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default SingleBuildingPage;
