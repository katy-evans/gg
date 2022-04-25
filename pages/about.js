import React from 'react'
import Button from '../components/Button';

const About = () => {
  return (
		<div className="max-w-7xl mx-auto">
			<section>
				<div className="grid grid-cols-2 h-full">
				{/* <div className="grid grid-cols-2 gap-4 md:gap-8 h-full"> */}
					<div className="col-span-2 flex justify-center items-center">
						<div className="w-full p-6 m-4">
							<div className="text-center top-20 md:flex md:justify-center">
								<div className="space-y-8 text-[#b0c5c2]">
									<h1 className="text-4xl text-gannet-500 font-slab">
									About
									</h1>
									<div className="text-xl">
										<p>Green Gannet Food Co ltd is a family run company based in Falkirk specialising in all things slow smoked &amp; BBQ. We cater for both formal and informal events such as weddings, corporate days, family gatherings, garden party's and street food pop ups across Central Scotland.</p>
									</div>
								</div>
							</div>
								<div className="mt-8">
									<hr></hr>
								</div>
						</div>
					</div>

					<div className="p-2 col-span-2 flex justify-center items-center text-center pb-10">
						<div className="text-neutral-400">
							<h2>Our ethos is simple</h2>
							<h2 className="text-2xl italic">"Quality produce cooked over coals"</h2>
						</div>
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
						Serving straight out of a profesionally converted cattle truck which has been customised to include our giant ceramic Kamado Joe grill "Big Joe" which is fueled with sustainably sourced and produced Scottish charcoal from Weir Forestry. Our set up is a guaranteed talking point at your event.
						</p>
					</div>
				</div>
			</section>

			<section className="bg-gannet-400 p-2 md:p-0">
				<div className="grid grid-cols-2 h-full">
				{/* <div className="grid grid-cols-2 gap-4 md:gap-8 h-full"> */}
					<div className="col-span-2 md:col-span-1 flex justify-center items-center text-center">
						<p className="p-8">
						2 Quis elit proident laboris exercitation consequat officia do Lorem
						quis velit commodo. Lorem labore esse adipisicing non sit cillum.
						Irure velit ex sit Lorem et reprehenderit duis commodo velit
						mollit.
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

			<Button />

		</div>
    );
}

export default About