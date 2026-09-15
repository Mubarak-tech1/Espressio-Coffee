import React from 'react'

const Newsletter = () => {
  return (
    <section className="bg-[#FFF3E0] items-center justify-center flex flex-col py-20">
      <div className="max-w-[650px] space-y-2 text-center ">
        <p className='text-[20px]'>Stay in the loop</p>

        <h2 className='text-[20px]'>Good things are always brewing.</h2>

        <p className='text-[20px]'>
          Subscribe for new menu items, special offers, and updates from
          Espressio.
        </p>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full rounded-2xl border border-[#8B4513] bg-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#5D2906] sm:w-72"
          />

          <button
            type="submit"
            className="rounded-md bg-[#8B4513] px-6 py-2 text-white transition duration-300 hover:bg-[#5D2906]">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;