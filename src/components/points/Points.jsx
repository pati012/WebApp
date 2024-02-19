import React from "react";
import "./Points.css";
import { useRef } from "react";
import { NavLink } from "react-router-dom";

export default function Points(prosp) {
  let { className, pointName = "", dataTp = null, image, path = false } = prosp;
  const ref = useRef(null);
  if (dataTp) {
    setTimeout(() => {
      const element = document.querySelector(`#${dataTp}`);
      const coordinate = element.getBoundingClientRect().top;
      if (ref.current) {
        ref.current.addEventListener("click", () => {
          window.scrollTo(0, coordinate.toFixed(0));
        });
      }
    }, 100);
  }
  if (!path) {
    return (
      <div ref={ref} className={`questions__go-section ${className}`}>
        <img className="questions__icon" src={image} alt="" />
        <p className="questions__text">{pointName}</p>
      </div>
    );
  } else {
    console.log(path);
    return (
      <NavLink className={`questions__go-section ${className}`} to={path}>
        <img className="questions__icon" src={image} alt="" />
        <p className="questions__text">{pointName}</p>
      </NavLink>
    );
  }
}
