import React from 'react'
import {BsArrowLeft} from 'react-icons/bs'
import {Link} from 'react-router-dom'

function NewRecord() {
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

        <form className='container'>

            <div className='mb-4'> <h5 className='fw-bold'> General Information </h5> </div>

            <div className='row'>
                <div className='col-lg-2 col-sm-2 col-xs-12 mb-4'>
                    <label for="validationCustom01" className="form-label">Unique Code </label>
                    <input type="text" className="form-control" id="validationCustom01"  required/>
                </div>

                <div className='col-lg-3 col-sm-3 col-xs-12 mb-4'>
                    <label for="validationCustom02" className="form-label">Name </label>
                    <input type="text" className="form-control" id="validationCustom02"  required/>
                </div>

                <div className='col-lg-2 col-sm-2 col-xs-12 mb-4'>
                    <label for="validationCustom04" class="form-label">Sex</label>
                    <select class="form-select" id="validationCustom04" required>
                    <option selected disabled value=""></option>
                    <option>Male</option>
                    <option>Female</option>
                    </select>
                </div>

                <div className='col-lg-2 col-sm-2 col-xs-12 mb-4'>
                    <label for="validationCustom03" className="form-label">Phone </label>
                    <input type="number" className="form-control" id="validationCustom03"  required/>
                </div>

                <div className='col-lg-3 col-sm-3 col-xs-12 mb-4'>
                    <label for="validationCustom03" className="form-label">Email </label>
                    <input type="email" className="form-control" id="validationCustom03" placeholder='xxx@xx' required/>
                </div>

            </div>

            <hr/>

            <div className='mb-4 mt-4'> <h5 className='fw-bold'> Appointement Information </h5> </div>

            <div className='row'>

                <div className='col-lg-3 col-sm-3 col-xs-12 mb-4'>
                        <label for="date" className="form-label">Appointement Date </label>
                        <input type="date" className="form-control" id="validationCustom02"  required/>
                </div>

                <div className='col-lg-2 col-sm-2 col-xs-12 mb-4'>
                    <label for="validationCustom04" class="form-label">First Time</label>
                        <select class="form-select" id="validationCustom04" required>
                        <option selected disabled value="">No</option>
                        <option>Yes</option>
                        </select>
                 </div>

                 <div className='col-lg-2 col-sm-2 col-xs-12 mb-4'>
                        <label for="date" className="form-label">Request Date</label>
                        <input type="date" className="form-control" id="validationCustom02"  required/>
                </div>

                <div className='col-lg-3 col-sm-3 col-xs-12 mb-4'>
                    <label for="validationCustom04" class="form-label">Appointement Status</label>
                            <select class="form-select" id="validationCustom04" required>
                            <option selected disabled value="">Passed</option>
                            <option>Recheduled</option>
                            <option>Missed</option>
                            </select>
                </div>

                <div className='col-lg-2 col-sm-2 col-xs-12 mb-4'>
                    <label for="validationCustom01" className="form-label">Appointement Time </label>
                    <input type="text" className="form-control" id="validationCustom01" placeholder='AM' required/>
                </div>




            </div>

            <div className='mb-4 mt-4'> <h5 className='fw-bold'> Address Information </h5> </div>

            <div className='row'>

                <div className='col-lg-3 col-sm-3 col-xs-12 mb-4'>
                        <label for="validationCustom03" className="form-label">Address 1 </label>
                        <input type="text" className="form-control" id="validationCustom03"  required/>
                </div>

                    <div className='col-lg-3 col-sm-3 col-xs-12 mb-4'>
                        <label for="validationCustom03" className="form-label">City </label>
                        <input type="text" className="form-control" id="validationCustom03"  required/>
                    </div>    


            </div>


            <div className='mb-4 mt-4'> <h5 className='fw-bold'> Notes </h5> </div>

            <div className='row'>

                <div className='col-lg-5 col-sm-5 col-xs-12 mb-4'>
                        <label for="validationCustom03" className="form-label">Before Appointement</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>

                    <div className='col-lg-5 col-sm-5 col-xs-12 mb-4'>
                        <label for="validationCustom03" className="form-label">After Appointement </label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>    


            </div>

            <div className='row mb-5  justify-content-end container-fluid'>
                <div className='col-lg-4  col-sm-4 col-xs-12'>
                    <button type='submit' className='btn ' id='btnSubmit'>Save</button>
                </div>
            
                
            </div>
                


        </form>
    </>
  )
}

export default NewRecord