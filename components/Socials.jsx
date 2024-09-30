'use client';
import {  
  RiLinkedinFill, 
  RiFacebookFill,
  RiMailFill,
  RiGithubLine,
  RiWhatsappLine 

} from 'react-icons/ri';
import Link from 'next/link';
import React from 'react'


const icons =[
  {
    path: 'https://www.linkedin.com/in/rene-makoule',
    name: <RiLinkedinFill />
  },
  {
    path: 'mailto:renemakoule@gmail.com',
    name: <RiMailFill />
  },,
  {
    path: 'https://github.com/renemakoule/',
    name: <RiGithubLine />
  },
  {
    path: '/',
    name: <RiWhatsappLine />
  }




]
const Socials = ({containerStyles, iconStyles}) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) =>{
        return(
          <Link href={icon.path} key={index}>
            <div className={`${iconStyles}`}>{icon.name}</div>
          </Link>
        )
      })}
    </div>
  )
}

export default Socials