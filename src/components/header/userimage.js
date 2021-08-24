import React from 'react';
import proImage from '../../proImage.jpg';
import './userimage.css';

export default function UserImage () {
    return(
        <div>
            <img className = "Image"
                alt = "User's Image"
                src = { proImage } 
            />
        </div>
    )
}
