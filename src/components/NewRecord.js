import React, { useState, useEffect, useRef, useMemo } from 'react';
import {BsArrowLeft} from 'react-icons/bs'
import {Link} from 'react-router-dom'
import { useAppContext } from "../context"
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function NewRecord() {
    const { addPost } = useAppContext();
    const [post, setPost] = useState({city: null, email: null, name: null,
        phone: null, sex: null, adress: null, afterAppointement: null, age: null, appointementStatus: null, appointementTime: null, beforeAppointement: null,
        code: null, dateAppointement: null, firstTime: null, requestDate: null})

        const codeRef = useRef(null);
        const nameRef = useRef(null);
        const cityRef = useRef(null);
        const emailRef = useRef(null);
        const phoneRef = useRef(null);
        const sexRef = useRef(null);
        const adressRef = useRef(null);
        const afterAppointementRef = useRef(null);
        const ageRef = useRef(null);
        const appointementStatusRef = useRef(null);
        const timeRef = useRef(null);
        const beforeRef = useRef(null);
        const dateRef = useRef(null);
        const firstTimeRef = useRef(null);
        const requestRef = useRef(null);




    const [isCollapsed, collapse] = useState(false) 

    const toggleVisibility = () => collapse(!isCollapsed);
    const handleOnChange = e => {
        setPost({...post, [e.target.name]: e.target.value})
    }
    const handleOnSubmit = e => {
        e.preventDefault();
        addPost(post)    
        setPost({city: null, email: null, name: null,
            phone: null, sex: null, adress: null, afterAppointement: null, age: null, appointementStatus: null, appointementTime: null, beforeAppointement: null,
            code: null, dateAppointement: null, firstTime: null, requestDate: null
        });
        
             codeRef.current.value = null;
             nameRef.current.value = null;
             cityRef.current.value = null;
             emailRef.current.value = null;
             phoneRef.current.value = null;
             sexRef.current.value = null;
             adressRef.current.value = null;
             afterAppointementRef.current.value = null;
             ageRef.current.value = null;
             appointementStatusRef.current.value = null;
             timeRef.current.value = null;
             beforeRef.current.value = null;
             dateRef.current.value = null;
             firstTimeRef.current.value = null;
             requestRef.current.value = null;
            toast.success('Enregistré avec succès !' , { theme: 'colored' });
    }

    const isValid = useMemo(() => {
            return Object.values(post).some(value => !value);
    }, [post])
    // useEffect(() => {
    //     addPost({title: "some new title", content: "some new content"})
    // }, [])

   



  return (
    <>
        <div className='navigation'>
            <div className=' navbar bg-dark'>
                <div className='brand'>
                    <h2 className='text-light fw-bold'> DrNG  | PATIENTS </h2>
                </div>
            </div>
        </div>

        <div className='row container mb-5'>
            <div className='col-lg-1'>
                <button className='btnleft mt-5'>  <Link to={`/profile`} className=' lefticon'> <BsArrowLeft className='fs-2 lefticon'/>  </Link>  </button>    
            </div>
            <div className='col-lg-3 ms-3'>
            <h5 className='mt-5 fw-bold'> NEW RECORD</h5>
            </div>
            
        </div>

        
        <ToastContainer />

            <form className='container' onSubmit={handleOnSubmit} >

                <div className='mb-4'> <h5 className='fw-bold'> General Information </h5> </div>

                <div className='row'>
                    <div className='col-lg-2 col-sm-2 col-xs-12 mb-4'>
                        <label for="validationCustom01" className="form-label">Unique Code </label>
                        <input type="text" className="form-control" id="validationCustom01" ref={codeRef} name='code'  onChange={handleOnChange} required/>
                    </div>

                    <div className='col-lg-3 col-sm-3 col-xs-12 mb-4'>
                        <label for="validationCustom02" className="form-label">Name </label>
                        <input type="text" className="form-control" id="validationCustom02" ref={nameRef} name='name'  onChange={handleOnChange} required/>
                    </div>

                    <div className='col-lg-2 col-sm-2 col-xs-12 mb-4'>
                        <label for="validationCustom04" class="form-label">Sex</label>
                        <select class="form-select" id="validationCustom04" ref={sexRef} name='sex' onChange={handleOnChange} required>
                        <option selected disabled value=""></option>
                        <option>Male</option>
                        <option>Female</option>
                        </select>
                    </div>

                    <div className='col-lg-2 col-sm-2 col-xs-12 mb-4'>
                        <label for="validationCustom03" className="form-label">Phone </label>
                        <input type="number" className="form-control" id="validationCustom03" ref={phoneRef} name='phone'  onChange={handleOnChange} required/>
                    </div>

                    <div className='col-lg-3 col-sm-3 col-xs-12 mb-4'>
                        <label for="validationCustom03" className="form-label">Email </label>
                        <input type="email" className="form-control" id="validationCustom03" ref={emailRef} placeholder='xxx@xx' name='email' onChange={handleOnChange} required/>
                    </div>

                </div>

                <hr/>

                <div className='mb-4 mt-4'> <h5 className='fw-bold'> Appointement Information </h5> </div>

                <div className='row'>

                    <div className='col-lg-3 col-sm-3 col-xs-12 mb-4'>
                            <label for="date" className="form-label">Appointement Date </label>
                            <input type="date" className="form-control" id="validationCustom02" ref={dateRef} name='dateAppointement'  onChange={handleOnChange} required/>
                    </div>

                    <div className='col-lg-2 col-sm-2 col-xs-12 mb-4'>
                        <label for="validationCustom04" class="form-label">First Time</label>
                            <select class="form-select" id="validationCustom04" name='firstTime' ref={firstTimeRef} onChange={handleOnChange} required>
                            <option selected disabled value="">No</option>
                            <option>Yes</option>
                            </select>
                    </div>

                    <div className='col-lg-2 col-sm-2 col-xs-12 mb-4'>
                            <label for="date" className="form-label">Request Date</label>
                            <input type="date" className="form-control" id="validationCustom02" ref={requestRef} name='requestDate' onChange={handleOnChange}  required/>
                    </div>

                    <div className='col-lg-3 col-sm-3 col-xs-12 mb-4'>
                        <label for="validationCustom04" class="form-label">Appointement Status</label>
                                <select class="form-select" id="validationCustom04" name='appointementStatus' ref={appointementStatusRef} onChange={handleOnChange} required>
                                <option selected disabled value="">Nothing</option>
                                <option>Passed</option>
                                <option>Recheduled</option>
                                <option>Missed</option>
                                </select>
                    </div>

                    <div className='col-lg-2 col-sm-2 col-xs-12 mb-4'>
                        <label for="validationCustom01" className="form-label">Appointement Time </label>
                        <input type="text" className="form-control" id="validationCustom01" ref={timeRef} placeholder='AM' name='appointementTime'  onChange={handleOnChange} required/>
                    </div>




                </div>

                <div className='mb-4 mt-4'> <h5 className='fw-bold'> Address Information </h5> </div>

                <div className='row'>

                    <div className='col-lg-3 col-sm-3 col-xs-12 mb-4'>
                            <label for="validationCustom03" className="form-label">Address 1 </label>
                            <input type="text" className="form-control" id="validationCustom03" ref={adressRef} name='adress' onChange={handleOnChange} required/>
                    </div>

                        <div className='col-lg-3 col-sm-3 col-xs-12 mb-4'>
                            <label for="validationCustom03" className="form-label">City </label>
                            <input type="text" className="form-control" id="validationCustom03" ref={cityRef} name='city' onChange={handleOnChange} required/>
                        </div>    

                        <div className='col-lg-3 col-sm-3 col-xs-12 mb-4'>
                            <label for="validationCustom03" className="form-label">Age </label>
                            <input type="text" className="form-control" id="validationCustom03" ref={ageRef} name='age' onChange={handleOnChange} required/>
                        </div>   


                </div>


                <div className='mb-4 mt-4'> <h5 className='fw-bold'> Notes </h5> </div>

                <div className='row'>

                    <div className='col-lg-5 col-sm-5 col-xs-12 mb-4'>
                            <label for="validationCustom03" className="form-label">Before Appointement</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" ref={beforeRef} name='beforeAppointement' rows="3" onChange={handleOnChange}></textarea>
                    </div>

                        <div className='col-lg-5 col-sm-5 col-xs-12 mb-4'>
                            <label for="validationCustom03" className="form-label">After Appointement </label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" ref={afterAppointementRef} name='afterAppointement' onChange={handleOnChange}></textarea>
                        </div>    


                </div>

                <div className='row mb-5  justify-content-end container-fluid'>
                    <div className='col-lg-4  col-sm-4 col-xs-12'>
                        <button type='submit' className='btn ' id='btnSubmit'  disabled={isValid}  >Save</button>
                    </div>
                
                    
                </div>
                    


            </form>

        

    </>
    
  )
}

export default NewRecord