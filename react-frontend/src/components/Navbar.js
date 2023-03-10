import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className='py-4 bg-lime-700 xl:px-48 md:px-10 sm:px-5'>
            <Link to={`/`}>
                <h1 className='xl:text-xl md:text-md sm:text-sm font-bold text-white'>Spring Boot - React CRUD</h1>
            </Link>
        </div>
    )
}

export default Navbar