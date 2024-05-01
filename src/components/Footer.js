import React from 'react'
import { LinkedIn, GitHub } from '@mui/icons-material'
import '../styles/Footer.css'
function Footer() {
    return (
        <div className='footer'>
            <div className='socialMedia'>
                <LinkedIn />
                <GitHub />
            </div>
            <p>&copy; 2024 <strong>Email:</strong> rohanmishra004@gmail.com </p >
            <p><strong>Mobile:</strong>:969672427</p>
        </div>
    )
}

export default Footer