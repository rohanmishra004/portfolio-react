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
            <p>&copy; 2024 rohanmishra.com</p>

        </div>
    )
}

export default Footer