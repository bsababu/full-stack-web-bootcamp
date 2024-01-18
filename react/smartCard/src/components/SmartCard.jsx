import React from "react";
import Avatar from "./Avatar";
import DetailsInfo from "./DetailsInfo";

function SmartCard(props) {
  return (
    <div className="card">
      <div className="top">
        <p>{props.id}</p>
        <h2 className="name">{props.name}</h2>
        <Avatar src={props.src}/>
      </div>
      <div className="bottom">
      <DetailsInfo detail={props.tel}/>
      <DetailsInfo detail={props.mail}/>
        {/* <p className="info">{props.tel}</p>
        <p className="info">{props.mail}</p> */}
      </div>
    </div>
  );
}

export default SmartCard;
