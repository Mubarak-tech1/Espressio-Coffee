import { Link } from "react-router-dom";
import Coffeeimage from "../assets/images/CoffeeCup.png";
import CoffeeCupimage  from "../assets/images/CoffeeCup.svg";

const Hero = () => {
  return (
    <section className="overflow-hidden bg-[#FFF3E0]">
      <div className="mx-auto flex min-h-[550px] max-w-7xl flex-col items-center gap-10 px-5 py-12 md:flex-row md:px-10 lg:px-8">
        {/* Hero Content */}
        <div className=" w-full md:w-1/2">
          <h1 className="bg-[radial-gradient(50%_50%_at_50%_50%,#000_35.53%,#8B4513_83.97%)] bg-clip-text font-serif text-5xl font-bold leading-tight text-transparent md:text-6xl lg:text-6xl">
            Good Coffee. <br />
            Great Bites. <br /> Better Moments.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#4B2C20]/80 md:text-xl">
            From carefully crafted coffee to delicious snacks, find something
            made for your kind of moment.
          </p>

          <Link
            to="/menu"
            className="mt-8 inline-block rounded-lg bg-[#8B4513] px-6 py-3 font-semibold text-white transition hover:bg-[#6a3410]">
            Explore Our Menu
          </Link>
        </div>

        {/* Hero Images */}
        <div className="hidden relative md:flex min-h-[400px] w-full items-center justify-center md:min-h-[500px] md:w-1/2">
          {/* Coffee */}

          <img
            src={Coffeeimage}
            alt="Coffee"
            className="w-[300px] z-10 absolute left-40 md:w-[300px] lg:w-[350px]"
          />

          {/* Coffee Cup */}
          <img
            src={CoffeeCupimage}
            alt="Coffee cup"
            className="absolute bottom-0 right-0 w-[180px] md:right-[-20px] md:w-[280px] lg:right-[70px] lg:top-29 lg:w-[400px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
