import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { FiFacebook } from "react-icons/fi";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa6";
import { FiYoutube } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";

const Header = () => {
  return (
    <>
      <section>
        <div className='flex flex-row justify-between p-5'>
          <div className='flex flex-row justify-between gap-3 items-center'><CiLocationOn /> <p>Sample location test</p></div>
          <div className='flex flex-row justify-between gap-6 items-center text-2xl'><FiFacebook className='border-l-2' /><BsTwitterX className='border-l-2' /><FaInstagram className='border-l-2'/><FiYoutube className='border-l-2'/><MdOutlineEmail className='border-l-2'/><IoIosSearch className='border-l-2'/></div>
        </div>

        <div className='flex flex-row justify-between rounded-lg bg-neutral-1'>
          <div>Logo</div>
          <div className='flex flex-row justify-between gap-4'>Navbar and button</div>
        </div>
      </section>
    </>
  )
}

export default Header