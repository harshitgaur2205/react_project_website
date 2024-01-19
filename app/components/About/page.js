import React from 'react'
import Card from '@/app/components/About/card'

function page() {

  const data = [
    {
      name:"Helped",
      count:250
    },
    {
      name:"Active",
      count: 100
    }
  ]
  return (
    <div className='about'>
      <div className='about_l'>
        <h3>About Us</h3>
        <h2>We Connect Urban India To Rural India</h2>
        <p>Gaur's Foundation: Bridging Urban Communities through Support and Generosity.</p>
      </div>
      <div className='about_r'>
        <h4>At Gaur's Foundation, our mission is simple yet profound: to unite urban communities in a shared purpose of compassion, donation, and support. We understand the strength that lies within urban areas and aim to harness this strength for the betterment of society.</h4>
        <div className='nav_r_b'>
          <div className='help'>
            {data.map((e)=>{
              return(
                <>
                  <Card name = {e.name}  count={e.count} />
                </>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default page