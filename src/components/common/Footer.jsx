/* eslint-disable jsx-a11y/anchor-is-valid */

import { BiBuildingHouse } from "react-icons/bi";
import { FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="text-slate-200">
      <footer>
        <div className="flex flex-wrap gap-2 max-w-7xl mx-auto px-4">
          <div className="flex-1 basis-[10rem]">
            <Link to="/" className="flex-shrink-0 flex-align-center gap-x-1">
              <BiBuildingHouse className="text-3xl text-primary" />
              <h1 className="hidden md:block">Hindsight Ventures</h1>
            </Link>
            <div className="mt-3">
              <p className="text-sm">
              Navigating the Future of Land Ownership
              </p>
              
              <div className="gap-5 my-6 flex-center-center">
              <a href="https://web.facebook.com/profile.php?id=61560415778408" target="_blank" rel="noopener noreferrer">
                <div className="icon-box bg-dark-light hover:bg-hover-color-dark">
                  <FiFacebook />
                </div>
                </a>
                

                <a href="https://x.com/hindsight_hq?s=21" target="_blank" rel="noopener noreferrer">
                <div className="icon-box bg-dark-light hover:bg-hover-color-dark">
                  <FaTwitter />
                </div>
                </a>

                <a href="https://www.instagram.com/hindsight_ventureske?igsh=MWppYjN0NTNpY3Jsaw%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
                <div className="icon-box bg-dark-light hover:bg-hover-color-dark">
                  <FaInstagram />
                </div>
                </a>

                <a href="https://www.tiktok.com/@hindsightventures?_t=8qMmmooPCiM&_r=1" target="_blank" rel="noopener noreferrer">
                <div className="icon-box bg-dark-light hover:bg-hover-color-dark">
                  <FaTiktok />
                </div>
              </a>

              </div>
            </div>
          </div>

          <div className="flex-1 basis-[10rem]">
          <h2 className="text-xl font-semibold">Quick Links</h2>
          <ul className="flex gap-6 mt-3">
            <li className="text-muted">
              <a href="#">About Us</a>
            </li>
            <li className="text-muted">
              <a href="#">Services</a>
            </li>
            <li className="text-muted">
              <a href="#">Blog</a>
            </li>
            <li className="text-muted">
              <a href="#">Portfolio</a>
            </li>
          </ul>
        </div>

          

          <div className="flex-1 basis-[10rem] text-center md:text-left">
            <h2 className="text-xl font-semibold">
              Subscribe to our Newsletter
            </h2>
            <p className="text-sm text-muted">
              Subscribe to be the first one to know about updates. Enter your
              email
            </p>
            <div className="justify-center my-3 flex-align-center">
              <input
                type="text"
                className="px-4 py-[0.35rem] card-bordered dark:shadow-none outline-none bg-transparent rounded-lg border-dark"
                placeholder="Email Address.."
              />
              <button className="-ml-2 btn btn-primary">subscribe</button>
            </div>
          </div>
        </div>
      </footer>
      <div className="py-2 mt-3 text-center border-t text-muted border-dark">
  <p>
    &copy; {new Date().getFullYear()} All Rights Reserved.
  </p>
</div>

    </div>
  );
};

export default Footer;
