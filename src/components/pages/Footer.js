import React from 'react';
import { FaGithub, FaLinkedin, FaStackOverflow } from 'react-icons/fa';
import '../../styles/About.css';



export default function Footer() {
    return (

        <footer>
            <h3 className='text-white text-center pt-5'>Building the future through <span style={{ color: '#F2921D ' }}>code</span></h3>
            <div className='icons'>
                <h4 className='text-white'>Contact</h4>
                <a href='https://github.com/Aungphyohan5'><FaGithub size={30} color="#F2CD5C" className='m-2' /></a>
                <a href='https://www.linkedin.com/feed/'><FaLinkedin size={30} color="#F2CD5C" className='m-2' /></a>
                <a href='https://stackoverflow.com/'><FaStackOverflow size={30} color="#F2CD5C" className='m-2' /></a>
            </div>
            <div className='text-white text-center'>
                <small >&copy; 2023 Aung Phyo Han. All rights reserved.</small>
            </div>


        </footer>

    )
}