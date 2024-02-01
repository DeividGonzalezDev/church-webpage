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
      <div className="hidden md:flex justify-between text-neutral-1  h-[80px] mx-[45px] ">
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

      <div className="flex flex-row justify-between items-center rounded-lg bg-neutral-1 md:mx-[45px] px-[50px] py-[20px] md:gap-[219px]">
        <div>
          <Image
            src="/logo.jpg"
            width={72}
            height={72}
            alt="logo"
            className="h-[40px] w-[40px] min-h-[40px] min-w-[40px] rounded-full"
          />
        </div>
        <svg
          width="24"
          height="18"
          viewBox="0 0 24 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.99992 0.666748H10.3333C10.7753 0.666748 11.1992 0.842343 11.5118 1.1549C11.8243 1.46746 11.9999 1.89139 11.9999 2.33341C11.9999 2.77544 11.8243 3.19937 11.5118 3.51193C11.1992 3.82449 10.7753 4.00008 10.3333 4.00008H1.99992C1.55789 4.00008 1.13397 3.82449 0.821407 3.51193C0.508847 3.19937 0.333252 2.77544 0.333252 2.33341C0.333252 1.89139 0.508847 1.46746 0.821407 1.1549C1.13397 0.842343 1.55789 0.666748 1.99992 0.666748ZM13.6666 14.0001H21.9999C22.4419 14.0001 22.8659 14.1757 23.1784 14.4882C23.491 14.8008 23.6666 15.2247 23.6666 15.6667C23.6666 16.1088 23.491 16.5327 23.1784 16.8453C22.8659 17.1578 22.4419 17.3334 21.9999 17.3334H13.6666C13.2246 17.3334 12.8006 17.1578 12.4881 16.8453C12.1755 16.5327 11.9999 16.1088 11.9999 15.6667C11.9999 15.2247 12.1755 14.8008 12.4881 14.4882C12.8006 14.1757 13.2246 14.0001 13.6666 14.0001ZM1.99992 7.33341H21.9999C22.4419 7.33341 22.8659 7.50901 23.1784 7.82157C23.491 8.13413 23.6666 8.55805 23.6666 9.00008C23.6666 9.44211 23.491 9.86603 23.1784 10.1786C22.8659 10.4912 22.4419 10.6667 21.9999 10.6667H1.99992C1.55789 10.6667 1.13397 10.4912 0.821407 10.1786C0.508847 9.86603 0.333252 9.44211 0.333252 9.00008C0.333252 8.55805 0.508847 8.13413 0.821407 7.82157C1.13397 7.50901 1.55789 7.33341 1.99992 7.33341Z"
            fill="#BF0A30"
          />
        </svg>

        <nav className="md:flex flex-row justify-between items-center font-bold text-2xl text-neutral-13 w-full hidden">
          <Link href={"/"}>INICIO</Link>
          <Link href={"/"}>SERMONES</Link>
          <Link href={"/blog"}>BLOG</Link>
          <Link href={"/contact-us"}>CONTÁCTANOS</Link>
          <Link
            href={"/donate"}
            className="h-full flex items-center bg-red-500 rounded-md px-[30px] py-[20px] text-neutral-1 font-extrabold"
          >
            DONAR
          </Link>
        </nav>
      </div>
    </section>
  );
};

export default Header;
