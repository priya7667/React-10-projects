import React from "react";
import styles from "./Navigation.module.css"; 
import { FaCode } from "react-icons/fa";

const Navigation = () => {
  return (
    <>
    <div className={styles.navbar}> 
      <div className={styles.div1}>
        <FaCode/>
      </div>
      <div className={styles.div2}> 
        <li><a href="/">Home</a></li>
        <li><a href="/">Contact</a></li>
        <li><a href="/">Work</a></li>
        
      </div>
    </div>
   
    
    </>
  );
};

export default Navigation;
