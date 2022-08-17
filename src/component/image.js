import React from 'react'
import './Image.css'
const Image = (props) => {
  return (
        
          <div className="imageList">

          <img src={props.src} alt="loading" />
          </div>
        
  )
}

export default Image
