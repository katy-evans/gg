import React from 'react'
import Link from 'next/link'
import ThankyouPage from '../components/Thankyou';

const contact = () => {
  return (
        <>
			<div className="col-span-2 flex justify-center items-center">
				<div className="w-full p-6 m-4">
					<div className="text-center top-20 md:flex md:justify-center">
						<div className="space-y-8 text-[#b0c5c2]">
							<h1 className="text-4xl text-gannet-500 font-slab">
							Get in touch!
							</h1>
						</div>
					</div>
					<div className="mt-8">
						<hr></hr>
					</div>
				</div>
			</div>

			<div className="max-w-7xl mx-auto">
				<div className="min-h-screen">
					<form action="https://formsubmit.co/1katytogo@gmail.com" method="POST" className="">

{/* -----  message / submit  ----- */}

						<div className="grid grid-cols-2 gap-4 md:gap-6 lg:gap-14 h-full mx-6">
							<div className="col-span-2 md:col-span-1 p-2 md:m-6">
								<div className="mb-5">
									<label htmlFor="enquiry" className="text-lg flex justify-between items-end text-gannet-600"><span>Enquiry</span><span className="text-xs text-red-500">Required</span></label>
									<textarea name="enquiry" id="enquiry" required cols="30" rows="10" className="shadow-md mt-1 block w-full sm:text-sm rounded-none border-gray-900 bg-white"></textarea>
								</div>

								<div className="space-y-6">
									<button type="submit" className="rounded-none p-2 w-full focus:outline-none focus:ring-2 focus:ring-offset-2 shadow-md bg-gray-800 text-[#222] bg-gannet-400 hover:bg-gannet-600 hover:text-white transition duration-300"><p className="text-lg">Send</p>
									</button>
								</div>
							</div>

{/* -----  / name / ----- */}
				
							<div className="col-span-2 md:col-span-1 text-center">
								<div className="flex justify-center items-center p-2">
									<div className="py-4 mt-4 w-full">
										
										<label htmlFor="name" className="text-lg flex justify-between items-end text-gannet-600"><span>Name</span><span className="text-xs text-red-500 ">Required</span></label>
										<div className="mt-1 flex shadow-md pb-2">
											<input type="text" name="name" required className="flex-1 block w-full sm:text-sm rounded-none border border-gray-900 dark:border-gray-100 bg-white"></input>
										</div>
{/* -----  / email / ----- */}
										<div className="">
											<label htmlFor="email" className="text-lg flex justify-between items-end text-gannet-600"><span>Email</span><span className="text-xs text-red-500">Required</span></label>
											<div className="mt-1 flex shadow-md pb-2">
												<input type="email" name="email" required className="flex-1 block w-full sm:text-sm rounded-none border border-gray-900 dark:border-gray-100 bg-white"></input>
											</div>
										</div>
{/* -----  / phone /  ----- */}
										<label htmlFor="phone" className="text-lg flex justify-between items-end text-gannet-600"><span>Phone</span><span className="text-xs text-red-500">Required</span></label>
											<div className="mt-1 flex shadow-md pb-2">
												<input type="phone" name="email" required className="flex-1 block w-full sm:text-sm rounded-none border border-gray-900 dark:border-gray-100 bg-white"></input>
											</div>
		{/* ----- / event / ----- */}									
											<label htmlFor="event" className="text-lg flex justify-between items-end text-gannet-600"><span>Event type</span><span className="text-xs text-red-500">Required</span></label>
											<div className="mt-1 flex shadow-md pb-2">
												<input type="event" name="email" required className="flex-1 block w-full sm:text-sm rounded-none border border-gray-900 dark:border-gray-100 bg-white"></input>
											</div>
{/* ----- / number of guests / ----- */}
											<label htmlFor="atendee" className="text-lg flex justify-between items-end text-gannet-600"><span>Number of guests</span><span className="text-xs text-red-500">Required</span></label>
											<div className="mt-1 flex shadow-md">
												<input type="atendee" name="email" required className="flex-1 block w-full sm:text-sm rounded-none border border-gray-900 dark:border-gray-100 bg-white"></input>
											</div>
									</div>

								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
    </>
  )
}

export default contact