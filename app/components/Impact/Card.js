import React from 'react'

const Card = (props) => {
  return (
    <div className={`impact_card${props.id}`}>
        <h2 className="impact_heading">{props.title}</h2>
        <h3 className='impact_detail'>{props.detail}</h3>
    </div>
  )
}

export default Card