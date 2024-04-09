import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from "../../public/assets/images/eventify.svg"
import { FiInstagram } from "react-icons/fi";
import { FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className='border-t'>
      <div className='flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row'>
        <Link href={'/'}>
          <Image src={logo} alt='Eventify' width={128} height={38} />
        </Link>
        <div className="flex text-xl text-gray-400 gap-x-7">
          <Link href={"https://www.x.com"}>
            <FaXTwitter />
          </Link>
          <Link href={"https://www.x.com"}>
            <FaFacebookF />
          </Link>
          <Link href={"https://www.x.com"}>
            <FiInstagram />
          </Link>
          <Link href={"https://www.x.com"}>
            <FaLinkedinIn />
          </Link>
          
        </div>
        <p className='text-blue-950'>{currentYear} Eventify. All Rights reserved</p>
      </div>
      
    </footer>
  )
}

export default Footer