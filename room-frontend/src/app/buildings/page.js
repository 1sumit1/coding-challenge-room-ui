"use client"

import React, { useEffect, useState } from 'react'
import './buildings.scss'
import BuildingCard from '@/components/buildingCard/BuildingCard'
import BuildingPopup from '@/components/model/BuildingPopup'
import axios from 'axios'
import Link from 'next/link'

const BuildingsPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([]);

  const handlePopup = () => {
    setIsOpen(true);
  }
  const handleCloseModel = () => {
    setIsOpen(false)
  }



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8800/api/buildings');
        setData(response.data);

      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [])



  return (
    <div className=''>
      <div className='dashboard'>
        <h2 className='title'>Dashboard</h2>
        <button className='btn' onClick={handlePopup}>Add New Building</button>
        {
          isOpen && <BuildingPopup onClose={handleCloseModel} isOpen={isOpen} />
        }
      </div>
      <div className='buildings'>
        {
          data.map((item) => (
            <Link className='link' href={`/buildings/${item._id}`}>
              <div className='items' key={item._id}>
                <BuildingCard data={item} />
              </div>
            </Link>
          ))
        }
      </div>
    </div>
  )
}

export default BuildingsPage
