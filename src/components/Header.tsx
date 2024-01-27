import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { FiFacebook } from "react-icons/fi";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa6";
import { FiYoutube } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <section className="fixed top-0 w-full text-xl">
      <div className="flex justify-between text-neutral-1  h-[80px] mx-[45px] ">
        <div className="flex flex-row justify-between gap-3 items-center ">
          <CiLocationOn className="text-2xl" />
          <p>Tacuarembó, Urguay</p>
        </div>
        <div className="flex  justify-between items-center text-2xl gap-7">
          <span className="w-[1px] h-full bg-neutral-6"></span>
          <FiFacebook className="" />
          <span className="w-[1px] h-full bg-neutral-6"></span>

          <BsTwitterX className="" />
          <span className="w-[1px] h-full bg-neutral-6"></span>
          <FaInstagram className="" />
          <span className="w-[1px] h-full bg-neutral-6"></span>

          <FiYoutube className="" />
          <span className="w-[1px] h-full bg-neutral-6"></span>

          <MdOutlineEmail className="" />
          <span className="w-[1px] h-full bg-neutral-6"></span>

          <IoIosSearch className="" />
        </div>
      </div>

      <div className="flex flex-row justify-between rounded-lg bg-neutral-1 mx-[45px] px-[50px] py-[20px] gap-[219px]">
        <div>
          <Image
            src="/logo.jpg"
            width={72}
            height={72}
            alt="logo"
            className=" min-h-[72px] min-w-[72px] rounded-full"
          />
        </div>
        
          <nav className="flex flex-row justify-between items-center font-bold text-2xl text-neutral-13 w-full">
            <Link href={"/"}>INICIO</Link>
            <Link href={"/"}>SERMONES</Link>
            <Link href={"/blog"}>BLOG</Link>
            <Link href={"/contact-us"}>CONTÁCTANOS</Link>
            <Link href={"/donate"} className="h-full flex items-center bg-red-500 rounded-md px-[30px] py-[20px] text-neutral-1 font-extrabold">DONAR</Link>
          </nav>
        
      </div>
    </section>
  );
};

export default Header;
