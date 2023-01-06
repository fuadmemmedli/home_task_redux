import React from 'react'
import toast, { Toaster } from 'react-hot-toast';
const Favourites = () => {
    const notify = () => toast.success('Favorites cleaned successfully');
    return (
      <div className='fav'>
      <div className='btnn'>
        <button  onClick={notify}>Empty</button>
        <Toaster
        position="right-bottom"
        reverseOrder={false}
        />
        
      </div>
      <div className='list'>
      
        <ol>Count: 2
           <li>ABOUT ,Arount the Horn</li>
           <li>BERGS ,Berglunds snabbkop</li> 
        </ol>
      

      </div>
    </div>
  )
}


export default Favourites
