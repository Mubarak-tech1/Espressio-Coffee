import React from "react";
import { Link } from "react-router-dom";
import Facebook from "../../assets/images/Facebook.svg";
import Instagram from "../../assets/images/Instagram.svg";
import Email from "../../assets/images/mail.svg";
import Twitter from "../../assets/images/Twitter.svg";
import Whatsapp from "../../assets/images/WhatsApp.svg";


const Footer = () => {
  return (
    <footer className="bg-[#4B2C20] text-[#FFF3E0]">
      <div className="mx-auto max-w-7xl px-5 py-16  md:px-10 lg:px-8">
        {/* Top section */}
        <div className="  flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div className="max-w-sm">
            <Link to="/">
              <img src="/images/Logo.svg" alt="Logo" className="h-30 w-30" />
            </Link>

            <p className=" text-sm leading- text-[#FFF3E0B2]">
              Crafted coffee, delicious snacks, and good moments all in one
              place.
            </p>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-inter text-sm font-semibold uppercase tracking-wider">
              Stay Connected
            </h3>

            <div className="mt-4 flex gap-3">
              <Link
                to="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer">
                <img src={Facebook} alt="Facebook" />
              </Link>
              <Link
                to="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer">
                <img src={Instagram} alt="Instagram" />
              </Link>
              <Link
                to="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer">
                <img src={Twitter} alt="Twitter" />
              </Link>
              <Link
                to="https://www.whatsapp.com"
                target="_blank"
                rel="noopener noreferrer">
                <img src={Whatsapp} alt="WhatsApp" />
              </Link>
            </div>
          </div>
        </div>

        {/* Links section */}
        <div className=" grid grid-cols-2 gap-10 mt-10 md:grid-cols-4">
          {/* Explore */}
          <div className="flex flex-col gap-3">
            <h3 className="font-inter text-sm font-semibold uppercase tracking-wider">
              Explore
            </h3>

            <Link
              to="/"
              className="text-sm text-[#FFF3E0B2] transition hover:text-[#FFF3E0]">
              Home
            </Link>

            <Link
              to="/menu"
              className="text-sm text-[#FFF3E0B2] transition hover:text-[#FFF3E0]">
              Menu
            </Link>

            <Link
              to="/cart"
              className="text-sm text-[#FFF3E0B2] transition hover:text-[#FFF3E0]">
              Cart
            </Link>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-3">
            <h3 className="font-inter text-sm font-semibold uppercase tracking-wider">
              Services
            </h3>
            <Link
              to="/order-ahead"
              className="text-sm text-[#FFF3E0B2] transition hover:text-[#FFF3E0]">
              <p>Order Ahead</p>
            </Link>
            <Link
              to="/delivery"
              className="text-sm text-[#FFF3E0B2] transition hover:text-[#FFF3E0]">
              <p>Delivery</p>
            </Link>
            <Link
              to="/pickup"
              className="text-sm text-[#FFF3E0B2] transition hover:text-[#FFF3E0]">
              <p>Pickup</p>
            </Link>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-3">
            <h3 className="font-inter text-sm font-semibold uppercase tracking-wider">
              Company
            </h3>
            <Link
              to="/about-us"
              className="text-sm text-[#FFF3E0B2] transition hover:text-[#FFF3E0]">
              About Us
            </Link>
            <Link
              to="/contact"
              className="text-sm text-[#FFF3E0B2] transition hover:text-[#FFF3E0]">
              Contact
            </Link>
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-3">
            <h3 className="font-inter text-sm font-semibold uppercase tracking-wider">
              Legal
            </h3>
            <Link
              to="/terms-of-use"
              className="text-sm text-[#FFF3E0B2] transition hover:text-[#FFF3E0]">
              Terms of Use
            </Link>
            <Link
              to="/privacy-policy"
              className="text-sm text-[#FFF3E0B2] transition hover:text-[#FFF3E0]">
              <p>Privacy Policy</p>
            </Link>
            <Link
              to="/cookies"
              className="text-sm text-[#FFF3E0B2] transition hover:text-[#FFF3E0]">
              <p>Cookies</p>
            </Link>
          </div>
        </div>
      </div>
      {/* Bottom section */}
      <div className="flex  gap-3 pt-2 text-base text-[#FFF3E0B2] md:items-center md:justify-center md:gap-0 md:space-x-4 ">
        <p>&copy; {new Date().getFullYear()} Espressio. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
