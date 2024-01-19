import React from 'react'

const Social = (props) => {
  return (
    <div className='social_p1' >
        <a href={props.href} >{props.name}</a>
    </div>
  )
}

export default Social