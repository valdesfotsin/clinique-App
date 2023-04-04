import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
      <div className='header text-center '>
          <div > <h1 className=''> Welcome on Dr.Ngwashi Clinics </h1> </div>
          <p>Make this world a Better world</p>
          <button type="button"  className='btn btn-success p-3  fw-bold ' id='btnwelcome'> <Link to={`/profile`} className='link'>Start Record</Link>  </button>
          

      </div>
    )
  }


export default Home;
