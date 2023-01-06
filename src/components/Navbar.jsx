import React from 'react'
import {Link} from 'react-router-dom'
import '../App.css'
const NAvbar = () => {
  return (
    <nav>
        <span><b>CustomerFAVS NEXT</b></span> 
        <div className='btns'>
        <button>
            <Link to='/'>Home</Link>
        </button>
        <button>
            <Link to='/customers'>Customers</Link>
        </button>
        <button>
            <Link to='/favourites'>Favourites</Link>
        </button>            
        </div>

    </nav>
  )
}

export default NAvbar
