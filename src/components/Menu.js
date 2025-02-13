import React from 'react'
import Styles from "./navbar.module.css";
import { Link } from 'react-router-dom';
const Menu = () => {
  return (
    <div className={Styles.menuBlock}>
        <ul>
            <li><Link to="/">Dashboard</Link></li>
            <li><Link to="/classroom">Classrooms</Link></li>
            <li><Link to="/assesment">Assessments</Link></li>
            <li><Link to="/store">Store</Link></li>
            <li><Link to="/calender">Calender</Link></li>
            <li><Link to="/news">News</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to= '/profile'>My Profile</Link></li>
        </ul>
    </div>
  )
}

export default Menu