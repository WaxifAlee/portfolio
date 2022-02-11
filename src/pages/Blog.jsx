import React from "react";
import { Link } from "react-router-dom";

const Blog = () => {

  const linkStyle = {
    marginTop: "15px",
    padding: '0.5rem',
    textAlign: "center",
    fontFamily: "Poppins",
    textDecoration: "none",
    color: "var(--blue-primary)",
    fontWeight: "bold",
    border: "2px solid var(--blue-primary)",
    borderRadius: "35px"
  }

  const blogContainer = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "76vh"
  }
  const blogCard = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "33%",
    boxShadow: "0 0 4px 2px rgba(0,0,0, 0.6)",
    borderRadius: "20px",
    padding: "5rem"
  }
  return (
    <div style={blogContainer} className="main-container">
      <div 
      style={blogCard}
      className="blog-card float">
      <h1 style={{padding: "10px", fontFamily: "Reem Kufi", color: "red"}}>Oops <i className="fas fa-ban"></i> </h1>
      <h4 style={{fontFamily: "Poppins"}}>This feature is currently under maintainance. Apologizies for
       the interruption. Kindly 
        check again in a few days. <br /> Thank You <i className="fas fa-smile"></i>
      </h4>
      <Link style={linkStyle} to={"/"}>Return To The Homepage</Link>
    </div>
  </div>);
};

export default Blog;
