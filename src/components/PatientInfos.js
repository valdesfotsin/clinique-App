import React from "react";

function PatientInfos({name, code, age, address, phone, status}) {
  return (
    <div className='datas'>
        <div className='row container-fluid'>
                <div className='col-lg-2 col-sm-2 col-xs-12 '> <p>{name} </p> </div>
                <div className='col-lg-2 col-sm-2 col-xs-12 '> <p>{code} </p> </div>
                <div className='col-lg-2 col-sm-2 col-xs-12 '> <p>{age}</p> </div>
                <div className='col-lg-2 col-sm-2 col-xs-12 '> <p>{address}</p> </div>
                <div className='col-lg-2 col-sm-2 col-xs-12 '> <p> {phone} </p> </div>
            <div className='col-lg-2 col-sm-2 col-xs-12 '> <div className='status'><p>{status}</p>  </div> </div>
                
            </div>
    </div>
  )
}

export default PatientInfos;
