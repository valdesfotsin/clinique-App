import React, { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai';
import {HiChevronUpDown} from 'react-icons/hi2';
import { toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import Records from './Records';
import PatientInfos from './PatientInfos';

function Dashbord  () {

    const [record, setRecord] = useState(Records);
    
    useEffect(()=> {
        return () => {
            toast.success(`welcome`, {theme: 'colored'});       
    }
}) 

    
  return (
    <>       
        <div className='navigation'>
            <div className=' navbar bg-dark'>
                <div className='brand'>
                    <h2 className='text-light fw-bold'> DrNG  | PATIENTS </h2>
                </div>

            </div>
        </div>
        <div className='appointement'>
            <div className='row container-fluid'>
                <div className='col-lg-4 col-sm-4 col-xs-12 '>
                    <h3 className='text-danger text-center'>Appointments</h3>

                </div>

                <div className='col-lg-4 col-sm-4 col-xs-12 offset-lg-4' >
                
                     <input type="search"  placeholder='search' />  <AiOutlineSearch className='icon' /> 
                      

                </div>

            </div>

        </div>

        <div className='score'>
            <div className=' row container '>
                <div className='missed col-lg-3 col-sm-3 col-xs-12'>
                    <h3>Missed</h3>
                    <p className='text-danger fw-bold'>15</p>
                </div>
                <div className='recheduled col-lg-3 col-sm-3 col-xs-12'>
                <h3>recheduled</h3>
                 <p className='text-warning fw-bold'>21</p>
                </div>
                <div className='passed col-lg-3 col-sm-3 col-xs-12 '>
                <h3>Passed</h3>
                <p className='text-success fw-bold'>05</p>
                </div>
            </div>

        </div>

        <div className='firstTitle'>
            <div className='row container-fluid'>
            <div className='col-lg-1 col-sm-2 col-xs-12 name '>Name <button><HiChevronUpDown /> </button> </div>
                <div className='Code col-lg-1 col-sm-2 col-xs-12'>Code <button><HiChevronUpDown /> </button></div>
                <div className='titles col-lg-1 col-sm-2 col-xs-12'>Age <button><HiChevronUpDown /> </button> </div>
                <div className='titles col-lg-1 col-sm-2 col-xs-12'>Address <button><HiChevronUpDown /> </button></div>
                <div className='titles col-lg-1 col-sm-2 col-xs-12'>Phone  <button><HiChevronUpDown /> </button> </div>
                <div className='titles col-lg-1 col-sm-2 col-xs-12'>Status <button><HiChevronUpDown /> </button> </div>
            </div>
        </div>

        <div>
            {
                record.map(rec => {
                    return(
                        <PatientInfos 
                        name={rec.name} 
                        code={rec.code}
                        age={rec.age}
                        address={rec.address}
                        phone={rec.phone}
                        status={rec.status}
                        />
                        )
                }
                    )
            }
        </div>

        <div className='number'>
            <div className='row'>
                <div></div>
            </div>
        </div>

    </>
  )
}

export default Dashbord
