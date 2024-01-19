"use client"

import React from 'react';
import  Link  from 'next/link';

const Page = () => {
  return (
    <nav>
      <div className='nav_l'>
        LOGO
      </div>
      <div className='nav_r'>
        <div className='nav_r_l'>
          <Link href='/About'>
            ABOUT US
          </Link>
          <Link href='/Projects'>
            PROJECTS
          </Link>
          <Link href={`/Contact`}>
            CONTACT
          </Link>
        </div>
        <button className='nav_r_r'>
          DONATE
        </button>
      </div>
    </nav>
  );
};

export default Page;
