import { useState } from 'react'
import './CvHeader.css'

function CvHeader({ name, email , phoneNumber, address}) {
    return (
        <div className='cv-header-container'>
            <h1 id='name'>{name}</h1>
            <div className='personal-info'>
                <p id='email'><i className="fa-solid fa-envelope"></i> {email}</p>
                <p id='phone-number'><i className="fa-solid fa-phone"></i> {phoneNumber}</p>
                <p id='location'><i className="fa-solid fa-location-dot"></i> {address}</p>
            </div>
        </div>
    );
}

export default CvHeader