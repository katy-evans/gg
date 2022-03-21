import React from 'react'

const Services = () => {
  return (
    <>
      <div className="h-40 text-2xl flex justify-center items-center">
        <h1>Services</h1>
      </div>

      <div className="text-center w-full">
        <ul className="md:flex md:justify-around md:space-x-6 md:space-y-0 space-y-8 w-full">
          <li className="border-2 border-black h-20 w-full hover:bg-gannet-500 transition duration-300 ease-in-out">
            <h2>Street Food Trader</h2>
          </li>

          <li className="border-2 border-black h-20 w-full hover:bg-gannet-500 transition duration-300 ease-in-out">
            <h2>Private BBQ Catering</h2>
          </li>
        </ul>
      </div>
    </>
  );    
}

export default Services