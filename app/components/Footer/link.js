import React from 'react'

const link = (props) => {
  return (
    <div className='link_p1'>
        <a href={props.href}>{props.name}</a>
    </div>
  )
}

export default link