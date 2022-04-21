import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const Services = () => {
  return (
    <>
		<div className="max-w-7xl mx-auto">
			<section>
				<div className="grid grid-cols-2 h-full">


					{/* <div className="col-span-2 text-center mx-4 md:mx-0">
						<div className="flex justify-center items-center">
							<div className="w-full">
								<img src="/images/copy-image-copy.png" alt="food" className="object-cover object-bottom h-44 w-full"/>
							</div>
						</div>
					</div> */}


					<div className="col-span-2 flex justify-center items-center">
						<div className="w-full p-6 m-4">
							<div className="text-center top-20 md:flex md:justify-center">
								<div className="space-y-8 text-[#b0c5c2]">
								<h1 className="text-4xl text-gannet-500 font-slab">
								Services
								</h1>
									<p>A typical event for us can range from an intimate back garden birthday party, street food evening catering at a wedding or a corporate away day</p>
								</div>
							</div>
								<div className="mt-8">
									<hr></hr>
								</div>
						</div>
					</div>

					<div className="col-span-2 md:col-span-1 text-center mx-4 md:mx-0">
						<div className="bg-gannet-600">
							<div className="flex justify-center items-center">
								<div className="w-full">
									<img src="/images/burger.jpg" alt="food" className="object-cover"/>
								</div>
							</div>
						</div>
					</div>

					<div className="col-span-2 md:col-span-1 flex justify-center items-center text-center m-4 pb-6 text-[#b0c5c2]">
						<p>
						We play our part in ensuring we are as environmentally friendly as possible by using fully compostable and recyclable products. For a more formal event we also have a range of crockery that can be included in your package.
						</p>
					</div>
				</div>
			</section>

			<section className="bg-gannet-400 p-2 md:p-0">
				<div className="grid grid-cols-2 h-full">
				{/* <div className="grid grid-cols-2 gap-4 md:gap-8 h-full"> */}
					<div className="col-span-2 md:col-span-1 flex justify-center items-center text-center">
						<p className="p-8">
						No matter what type of event you are organising, rest assured you will receive locally sourced produce prepared and cooked with care and precision and served up with a smile by our friendly efficient team. 
						</p>
					</div>

					<div className="col-span-2 md:col-span-1 text-center">
						<div className="flex justify-center items-center p-2 md:p-0">
							<div className="">
								<img src="/images/image-2.jpg" alt="food" className="object-fit"/>
							</div>
						</div>
					</div>
				</div>
			</section>

			<div className="col-span-2 md:col-span-1 text-center bg-[#222]">
				<div className="flex justify-center items-center py-6 w-full p-5">
					{/* <button className="bg-gannet-400 p-2 border-2 border-[#222] rounded-md hover:bg-gannet-600 hover:text-gannet-200 hover:border-gannet-200 transition duration-300 ease-in-out">Button to Contact page?
					</button> */}
					<Link href="/contact">
						<a className="bg-gannet-400 p-2 border-2 border-[#222] rounded-md hover:bg-gannet-600 hover:text-gannet-200 hover:border-gannet-200 transition duration-300 ease-in-out">Button to Contact page?</a>
					</Link>
				</div>
			</div>
		</div>
      {/* <div className="h-40 text-2xl flex justify-center items-center">
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
      </div> */}
    </>
  );    
}

export default Services