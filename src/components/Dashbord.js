import React, { useState, useEffect } from 'react';
import { AiOutlineSearch, AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { GrFormAdd } from 'react-icons/gr';
import { HiChevronUpDown } from 'react-icons/hi2';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getPosts, deleteRecord } from '../services';
import PatientInfos from './PatientInfos';
import { Link } from 'react-router-dom';

function Dashbord() {
  const [posts, setPosts] = useState([]);
  const [isToastDisplayed, setIsToastDisplayed] = useState(false);

  useEffect(() => {
    getPosts().then((data) => {
      setPosts(data);
      if (!isToastDisplayed) {
        toast.success('Bienvenue sur le dashboard', { theme: 'colored' });
        setIsToastDisplayed(true);
      }
    });
  }, [isToastDisplayed]);

  const handleDeletePost = (id) => {
    deleteRecord(id)
      .then(() => {
        setPosts((prevPosts) => prevPosts.filter((post) => post._id !== id));
      })
      .catch((error) => {
        console.error('Erreur lors de la suppression du post :', error);
      });
  };
    
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
                
                     <input type="search"  placeholder='search' id='search' />  <AiOutlineSearch className='icon' /> 
                      

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
                posts.map(post => {
                    return(
                        <PatientInfos 
                        key={post._id}
                        _id={post._id}
                        name={post.name} 
                        code={post.code}
                        age={post.age}
                        address={post.adress}
                        phone={post.phone}
                        status={post.appointementStatus}
                        deletePost={handleDeletePost}
                        />
                        )
                }
                    )
            }
        </div>

        <div className='number'>
            <div>
                <div className='col-lg-4'>
                    <button>< AiOutlineLeft className='ms-2 fw-bold' /> </button> 
                            <p className='mt-3 numberp'>1</p>
                            <p className='mt-3'>2</p>
                            <p className='mt-3'>3</p>
                    <button> <AiOutlineRight className='me-2 fw-bold' /> </button> 
                </div>
                <div className='col-lg-4 addForm'>
                    <button> <Link to={`/NewRecord`}>< GrFormAdd className="formadd"/></Link>   </button>
                </div>

            </div>
           

           

                
            
        </div>

        

    </>
  )
}

export default Dashbord
