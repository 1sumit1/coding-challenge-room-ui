import React, { useState } from 'react'
import './BuildingPopup.scss'
import axios from 'axios';
import { useRouter } from 'next/navigation';

const BuildingPopup = ({ onClose, isOpen }) => {
    const [name, setName] = useState("");
    const [showModal, setShowModal] = useState(isOpen);
    const [error, setError] = useState(null);
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
           const response= await axios.post('http://localhost:8800/api/create-building', { name });
            console.log("data",response.data);
            setShowModal(onClose);
            router.push('/buildings');
        } catch (err) {
            setError(err);
        }
    }

    return (
        showModal && (
            <div className='model'>
                <span className="close" onClick={onClose}>&times;</span>
                <h3>Create new building</h3>
                <form onSubmit={handleSubmit}>
                    <label>Building Name</label>
                    <input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='e.g: House one ' />
                    <button type='submit'>Create</button>
                </form>
            </div>
        )
    )
}

export default BuildingPopup
