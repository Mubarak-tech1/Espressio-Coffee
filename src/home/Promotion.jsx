import React from "react";
import Adspic1 from "../assets/images/Rectangle 6.svg";
import Adspic2 from "../assets/images/images.jpeg";
import Adspic3 from "../assets/images/Rectangle 7.svg";
import { Link } from "react-router-dom";

const Promotion = () => {
  return (
    <>
      <div className="bg-[#FFF3E0] h-fit w-auto px-[15px] pb-15 flex-col gap-12 md:flex md:flex-row md:gap-6 lg:px-16 lg:gap-12">
        <div className="grid w-full grid-cols-2 grid-rows-2 gap-3 md:w-[50%] md:gap-4">
    
          <img
            src={Adspic1}
            alt="Coffee"
            className="col-start-1 row-span-2 h-[20px] min-h-[300px] w-full rounded-2xl object-cover"
          />

      
          <img
            src={Adspic2}
            alt="Coffee"
            className="col-start-2 row-start-1 h-[10px] min-h-[140px] w-full rounded-2xl object-fit-cover"
          />

      
          <img
            src={Adspic3}
            alt="Coffee"
            className="col-start-2 row-start-2 h-[10px] min-h-[140px] w-full rounded-2xl object-cover"
          />
        </div>

        <div className="flex flex-col gap-[24px] md:w-[50%] md:h-auto">
          <h1 className="bg-[radial-gradient(50%_50%_at_50%_50%,#000_35.53%,#8B4513_83.97%)] bg-clip-text text-transparent font-serif4 text-4xl font-bold md:text-2xl">
            More Than Just a Cup of Coffee
          </h1>
          <p className="text-black font-serif4 text-xl text-justify font-normal">
            At Espressio, every visit is about more than what's in your cup.
            Enjoy carefully crafted coffee, delicious bites, and a cozy
            experience made for good conversations, quiet moments, and
            everything in between.
          </p>
          <Link
            to="/menu"
            className="bg-[#8B4513] px-6 py-3 w-fit rounded-lg font-semibold text-white transition hover:bg-[#6a3410]">
            Explore Menu
          </Link>
        </div>
      </div>
    </>
  );
};

export default Promotion
;


