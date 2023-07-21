import React from "react";
import { MdDelete } from "react-icons/md";

function PatientInfos({ _id, name, code, age, address, phone, status, deletePost }) {
  const handleDelete = () => {
    if (typeof _id === "string") {
      deletePost(_id);
    } else {
      console.error("ID invalide :", _id);
    }
  };

  let statusColor = "";
  let statusBackground = "";

  if (status === "Missed") {
    statusColor = "text-danger";
    statusBackground = "#fec4c4";
  } else if (status === "Recheduled") {
    statusColor = "text-warning";
    statusBackground = "#fff2e0";
  } else if (status === "Passed") {
    statusColor = "text-success";
    statusBackground = "#a2b9a9";
  }

  return (
    <div className={`datas`}>
      <div className="row container-fluid">
        <div className="col-lg-2 col-sm-2 col-xs-12 justify-content-center">
          <p>{name}</p>
        </div>
        <div className="col-lg-2 col-sm-2 col-xs-12 justify-content-center">
          <p>{code}</p>
        </div>
        <div className="col-lg-2 col-sm-2 col-xs-12 justify-content-center">
          <p>{age}</p>
        </div>
        <div className="col-lg-2 col-sm-2 col-xs-12 justify-content-center">
          <p>{address}</p>
        </div>
        <div className="col-lg-2 col-sm-2 col-xs-12 justify-content-center ">
          <p>{phone}</p>
        </div>
        <div className={`col-lg-1 col-sm-1 col-xs-12 justify-content-center `}>
          <div className={`status ${statusColor}  `}  style={{ backgroundColor: statusBackground }}>
            <p>{status}</p>
          </div>
        </div>
        <div className="col-lg-1 col-sm-1 col-xs-12 justify-content-center btn" onClick={handleDelete}>
          <MdDelete className="fw-bold fs-5" />
        </div>
      </div>
    </div>
  );
}

export default PatientInfos;
