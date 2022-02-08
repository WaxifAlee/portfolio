import React from 'react';
import "./Bars.css"

const Bars = (props) => {
  return (
        <div style={{padding: "1rem"}} className="bar">
            <div style={ {width: "90%", background: "#aaa", height: "2.8rem"} } className="outer-container">
                <div style={{background: props.bg, height:"2.8rem", width: props.percent, padding: "10px", animation: "loadBar 2s ease-in-out" }} className="inner-container">
                    <span style={{textAlign: "left", fontFamily: "Poppins"}}> {props.skill}  </span>
                    <span style={{float: "right", fontFamily: "Poppins"}} > {props.percent} </span>
                </div>
            </div>
        </div>);
};

export default Bars;
