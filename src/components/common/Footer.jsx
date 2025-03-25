/* eslint-disable jsx-a11y/anchor-is-valid */

import { FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="text-slate-200 bg-dark-light py-10">
      <footer className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center gap-10 md:flex-row md:text-left md:items-start">
          {/* Logo & Socials */}
          <div className="flex-1">
            <Link to="/" className="flex justify-center md:justify-start items-center gap-2">
              <h1 className="hidden md:block">HINDSIGHT VENTURES</h1>
            </Link>
            <p className="mt-3 text-sm">Navigating the Future of Land Ownership</p>

            {/* Social Icons */}
            <div className="flex justify-center md:justify-start gap-4 mt-6">
              {[
                { icon: <FiFacebook />, link: "https://web.facebook.com/profile.php?id=61560415778408" },
                { icon: <FaTwitter />, link: "https://x.com/hindsight_hq?s=21" },
                { icon: <FaInstagram />, link: "https://www.instagram.com/hindsight_ventureske?igsh=MWppYjN0NTNpY3Jsaw%3D%3D&utm_source=qr" },
                { icon: <FaTiktok />, link: "https://www.tiktok.com/@hindsightventures?_t=8qMmmooPCiM&_r=1" }
              ].map(({ icon, link }, index) => (
                <a key={index} href={link} target="_blank" rel="noopener noreferrer">
                  <div className="icon-box bg-dark hover:bg-hover-color-dark text-white p-3 rounded-full">
                    {icon}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex-1">
  <h2 className="text-xl font-semibold">Quick Links</h2>
  <ul className="flex flex-col items-center md:items-start gap-2 mt-3">
    <li>
      <Link to="/" className="text-muted hover:text-primary">Home</Link>
    </li>
    <li>
      <Link to="/property" className="text-muted hover:text-primary">Property</Link>
    </li>
    <li>
      <Link to="/about" className="text-muted hover:text-primary">About Us</Link>
    </li>
    <li>
      <Link to="/contact" className="text-muted hover:text-primary">Contact</Link>
    </li>
  </ul>
</div>

          {/* Newsletter */}
          <div className="flex-1">
            <h2 className="text-xl font-semibold">Subscribe to our Newsletter</h2>
            <p className="text-sm text-muted mt-2">
              Subscribe to be the first one to know about updates. Enter your email.
            </p>
            <div className="mt-3 flex justify-center md:justify-start items-center gap-2">
              <input
                type="text"
                className="px-4 py-[0.35rem] bg-transparent border border-dark-light rounded-lg outline-none w-full md:w-auto"
                placeholder="Email Address.."
              />
              <button className="btn btn-primary">Subscribe</button>
            </div>
          </div>
        </div>
      </footer>

      {/* Copyright */}
      <div className="py-3 mt-6 text-center border-t border-dark text-muted">
        <p>&copy; {new Date().getFullYear()} All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
