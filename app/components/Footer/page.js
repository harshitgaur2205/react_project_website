import React from 'react'
import Info from '@/app/components/Footer/info'
import Link from '@/app/components/Footer/link'
import Social from '@/app/components/Footer/Social'

const page = () => {

  const data = [
    {
      logo:"logo",
      detail:"+91 88001309XX"
    },
    {
      logo:"logo",
      detail:"harshitgaurofficial2205@gmail.com"
    }
  ]


  const Nav = [
    {
      name:"Main",
      href:"#"
    },{
      name:"About",
      href:"#"
    },{
      name:"Projects",
      href:"#"
    },{
      name:"Contact",
      href:"#"
    },
  ]

  const social = [
    {
      name:"Github",
      href:"#"
    },{
      name:"Instagram",
      href:"#"
    },{
      name:"LinkedIn",
      href:"#"
    },{
      name:"Youtube",
      href:"#"
    },
  ]
  return (
    <footer>
        <div className='footer_p1'>
            <div>
              <h2>Logo</h2>
            </div>
            <div className='page'>
              <h2>Pages</h2>
              {Nav.map((e)=>{
                return <Link href={e.href} name={e.name}/>
              })}
            </div>


            <div className='info'>
              <h2>Info</h2>
              {data.map((e) => {
                return <Info logo={e.logo} detail={e.detail} />
              })}
            </div>


            <div className='links'>
              <h2>Social Links</h2>
              {
                social.map((e)=>{
                  return <Social href={e.href} name={e.name} />
                })
              }
            </div>
        </div>

        <div className='footer_p2'>
          <h3>copyright 2024 @gaursFoundation all right reserved</h3>
        </div >
    </footer>
  )
}

export default page