import React from 'react'
import { Link } from 'react-router-dom';

const BannerBox=(props) =>{
  return (
    <div className=" box banner-box overflow-hidden rounded-lg group">
        <Link to={'/'}>
        <img src={props.img} className='w-full transition-all group-hover:scale-105 group-hover:rotate-1' alt='banner'></img>
        </Link>
    </div>
    
  )
}

export default BannerBox;
