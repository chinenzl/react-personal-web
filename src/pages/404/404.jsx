import React from 'react';
import { Link } from "react-router-dom";
import './404.css'
import ErrorPic from '@/assets/images/404.gif'
const ErrorPage = () => {

  return (
    <div className="wrap-error">
      <ul className="home-page">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
      <img src={ErrorPic} alt="" />
    </div>
  )
}
export default ErrorPage;