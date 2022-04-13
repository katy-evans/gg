import React from 'react'

const About = () => {
  return (
		<div className="max-w-7xl mx-auto">
			<section>
				<div className="grid grid-cols-2 gap-4 md:gap-8 h-full">
					<div className="col-span-2 flex justify-center items-center">
						<div className="w-full p-6 m-4">
							<div className="text-center top-20 md:flex md:justify-center">
								<div className="space-y-8 text-[#b0c5c2]">
								<h1 className="text-4xl text-gannet-500 font-slab">
								About
								</h1>
									<p>Quality produce cooked over coals, served up in a variety of ways at markets, pop ups, weddings, public/private events...</p>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
								</div>
							</div>
								<div className="mt-8">
									<hr></hr>
								</div>
						</div>
					</div>

					<div className="p-2 col-span-2 flex justify-center items-center text-center pb-10">
						<h2 className="text-neutral-400 text-2xl italic">"Quality produce, locally sourced"</h2>
					</div>

					<div className="col-span-2 md:col-span-1 text-center mx-4 md:mx-0">
						<div className="flex justify-center items-center">
							<div className="w-full">
								<img src="/images/firefood.jpg" alt="food" className="object-cover"/>
							</div>
						</div>
					</div>

					<div className="col-span-2 md:col-span-1 flex justify-center items-center text-center m-4 pb-6 text-[#b0c5c2]">
						<p>
						1 Quis elit proident laboris exercitation consequat officia do Lorem
						quis velit commodo. Lorem labore esse adipisicing non sit cillum.
						Irure velit ex sit Lorem et reprehenderit duis commodo velit
						mollit.
						</p>
					</div>
				</div>
			</section>

			<section className="bg-gannet-200 p-2 md:p-0">
				<div className="grid grid-cols-2 h-full">
				{/* <div className="grid grid-cols-2 gap-4 md:gap-8 h-full"> */}
					<div className="col-span-2 md:col-span-1 flex justify-center items-center text-center mx-4 mt-4">
						<p>
						2 Quis elit proident laboris exercitation consequat officia do Lorem
						quis velit commodo. Lorem labore esse adipisicing non sit cillum.
						Irure velit ex sit Lorem et reprehenderit duis commodo velit
						mollit.
						</p>
					</div>

					<div className="col-span-2 md:col-span-1 text-center">
						<div className="flex justify-center items-center p-2 md:p-0">
							<div className="">
								<img src="/images/firefood.jpg" alt="food" className="object-fit"/>
							</div>
						</div>
					</div>
				</div>
			</section>

			<div className="col-span-2 md:col-span-1 text-center bg-[#222]">
				<div className="flex justify-center items-center py-6 w-full p-5">
					<button className="bg-gannet-200 p-2 border-2 border-[#222] rounded-md hover:bg-[#222] hover:text-gannet-200 hover:border-gannet-200 transition duration-300 ease-in-out">CTA contact button here?
					</button>
				</div>
			</div>
		</div>
    );
}

export default About