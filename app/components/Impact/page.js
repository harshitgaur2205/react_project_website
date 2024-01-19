import React from 'react'
import Cards from "@/app/components/Impact/Card"

const page = () => {

    var data = [
        {
            id:1,
            title:"Sustainable Impact",
            detail:"Your donations go beyond just providing immediate relief. We invest in projects that create long-term change and empower communities to become self-sufficient."
        },
        {
            id:2,
            title:"Prioritize Education",
            detail:"Education is the key to breaking the cycle of poverty. We support education initiatives in rural areas, providing access to quality learning opportunities for children."
        },
        {
            id:3,
            title:"Empower Women",
            detail:"We believe in the power of women to uplift their communities. We provide skill development training, healthcare services, and microfinance opportunities to empower women and girls."
        },
        {
            id:4,
            title:"Promote Healthcare",
            detail:" We support healthcare initiatives, providing medical camps, awareness programs, and infrastructure development."
        },{
            id:5,
            title:" Build Bridges",
            detail:"We connect rural and urban communities through cultural exchange programs, volunteer opportunities, and knowledge sharing initiatives."
        },
        {
            id:6,
            title:"Empower Women",
            detail:"We believe in the power of women to uplift their communities. We provide skill development training, healthcare services, and microfinance opportunities to empower women and girls."
        },
        {
            id:7,
            title:"Promote Healthcare",
            detail:" We support healthcare initiatives, providing medical camps, awareness programs, and infrastructure development."
        },{
            id:8,
            title:" Build Bridges",
            detail:"We connect rural and urban communities through cultural exchange programs, volunteer opportunities, and knowledge sharing initiatives."
        }
        
    ]

  return (
    <div className='impact_main'>
        <div className='top'>
            <h1>Our Impact in Rural India</h1>
            <div className='line'></div>
        </div>
        <div className='bottom'>
            {
                data.map((e)=>{
                    return(
                        <Cards id={e.id} title={e.title} detail={e.detail} />
                    )
                })
            }
        </div>
    </div>
  )
}

export default page   