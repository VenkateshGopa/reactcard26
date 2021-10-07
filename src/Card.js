import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Card.css";
const Card = (props) => {
  const checkmark = (props) =>{
   return  props === "true" ? <i className="fas fa-check"></i> :<i className="fas fa-times"></i> ;
  }
  const classcheck = (props) =>{
    return props === "true" ? "" :"text-muted";
  }
  return (
    <div className="pri col-lg-4">
      <div className="card mb-5 mb-lg-0 bg-white">
      <h5 className="card-title text-muted text-uppercase text-center">{props.name}</h5>
      <h6 className="card-price text-center">{props.price}<span className="h6">/month</span></h6>
      <hr />
      <ul className="fa-ul">
        <li className={classcheck(props.usersc)}><span className="fa-li">{checkmark(props.usersc)}</span>{props.users}</li>
        <li className={classcheck(props.storagec)}><span className="fa-li">{checkmark(props.storagec)}</span>{props.storage}</li>
        <li className={classcheck(props.projectc)}><span className="fa-li">{checkmark(props.projectc)}</span>{props.project}</li>
        <li className={classcheck(props.accessc)}><span className="fa-li">{checkmark(props.accessc)}</span>{props.access}</li>
        <li className={classcheck(props.privateprojectsc)}><span className="fa-li">{checkmark(props.privateprojectsc)}</span>{props.privateprojects}</li>
        <li className={classcheck(props.supportc)}><span className="fa-li">{checkmark(props.supportc)}</span>{props.support}</li>
        <li className={classcheck(props.subdomainc)}><span className="fa-li">{checkmark(props.subdomainc)}</span>{props.subdomain}</li>
        <li className={classcheck(props.reportsc)}><span className="fa-li">{checkmark(props.reportsc)}</span>{props.reports}</li>
      </ul>
      <div className="d-grid">
        <a href="www.google.com" className="btn btn-primary text-uppercase">Button</a>
      </div>
      </div>
    </div>
  );
};

export default Card;
