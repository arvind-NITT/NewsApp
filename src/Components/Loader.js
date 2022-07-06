import React from 'react'
import Style from './Styles.css'
export default function loader() {
 
  return (
    <div className='container d-flex justify-item-center'>
       <div className="loader" style={Style}>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
       
        <span>Loading....</span>
    </div>
    </div>
  )
}
