import React from "react";

import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
} from "react-icons/hi";
import { RiExternalLinkFill } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io";
import { BiLogoInstagramAlt, BiLogoFacebookCircle } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="w-full bg-cyan min-h-[50vh] flex flex-col justify-around text-white px-2 md:px-10">
      <div className="flex items-center justify-between border-b py-3">
        <h1 className="font-bold text-lg">Lets Connect Here</h1>
        <button className="button_neg p-1 md:p-2">
          <a href="/">Hire Me</a>
        </button>
      </div>

      <div className="flex flex-wrap gap-8 md:justify-between py-4 font-light">
        <div className="flex flex-col gap-2">
          <span className="font-semibold">Olatinwa J</span>
          <p className="font-light">
            Let's Collaborate and Design something amazing.
          </p>
            <a
              href="https://instagram.com/omgworksnig?igshid=MzRlODBiNWFlZA=="
              target="_blank"
            >
              <button class="Btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1.5em"
                  viewBox="0 0 448 512"
                  class="svgIcon"
                >
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                </svg>
                <span class="text">Instagram</span>
              </button>{" "}
            </a>
        </div>
        <div className="flex flex-col">
          <span className="font-semibold">My Contact</span>
          <div className="flex flex-col">
            <div className="flex items-center">
              <HiOutlineMail />
              <span>daredharmie@gmail.com</span>
            </div>
            <div className="flex items-center">
              <HiOutlinePhone />
              <span>+234 9044578647</span>
            </div>
            <div className="flex items-center">
              <HiOutlineLocationMarker />
              <span>Lagos, Nigeria</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <span className="font-semibold">Navigations</span>
          <ul className="flex flex-col">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
            <li>
              <a href="/">My Projects</a>
            </li>
            <li>
              <a href="/">Resume</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col">
          <span className="font-semibold">Join Our Newsletter</span>
          <div className="flex items-center relative">
            <input
              className="input outline-0 border rounded"
              type="email"
              placeholder="Enter your email"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-between font-light border-t border-white py-2">
        <div className="flex items-center flex-wrap">
          <span className="pe-2">User Terms & Condition</span>
          <span className="border-s ps-2">Privacy Policy</span>
        </div>
        <span>Copyright © Damilare</span>
      </div>
      <div className="text-[10px] text-center">
        Designed by <a href="">metalekan</a>
      </div>
    </footer>
  );
};

export default Footer;
