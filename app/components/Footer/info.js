import React from 'react'

const info = (props) => {
  return (
    <div className='info_p1'>
        <h4>{props.logo}</h4>
        <p>{props.detail}</p>
    </div>
  )
}

export default info