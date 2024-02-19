import React from "react";
import './Point.css';

 export default function Point(props){
     let {className, width, height, background, text, size} = props;
      return (
         <div className={`point ${className}`} style={{width: `${width}px`, height: `${height}px`, backgroundColor: `${background}`, fontSize: `${size}px`}}>
            <span>{text}</span>
         </div>
      )
 }