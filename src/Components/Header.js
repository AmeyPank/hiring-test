import React from 'react'
import "./Header.css"
const Header = () => {
    return (
        <header>
            <div className='logo'>
                <p>Logo</p>
            </div>
            <ul className='links'>
                <li>About</li>
                <li>Pricing</li>
                <li>Review</li>
            </ul>
        </header>
    )
}

export default Header