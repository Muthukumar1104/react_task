import React from 'react'
import { Link } from 'react-router-dom'

function DynamicComponent({ name, description, title, image }) {
  return (
    <>
      <Link to="/">
        <button className="custom-btn btn-16">Home page</button>
      </Link>
      <div className="render">
        <div className="sub-content">
          <h1 style={{ textAlign: 'center', textTransform: 'uppercase' }}>
            Welcome to {name} section
          </h1>
          <h1>{title}</h1>
          <div className="description">
            <img src={image} />
            <p>{description}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default DynamicComponent
