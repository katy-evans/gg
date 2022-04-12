import React from 'react'
import Link from 'next/link'
import ThankyouPage from '../components/Thankyou';

const contact = () => {
  return (
        <>
			<div className="text-3xl text-gannet-600 text-center">
				<h1 className="font-slab p-6">Get in touch!</h1>
			</div>

			<div className="max-w-7xl mx-auto">
				<div className="min-h-screen">
					<form action="https://formsubmit.co/1katytogo@gmail.com" method="POST" className="">

			<div className="grid grid-cols-2 gap-4 md:gap-6 lg:gap-14 h-full mx-6">
					<div className="col-span-2 md:col-span-1 p-2 md:m-6">
						<div className="mb-5">
								<label htmlFor="enquiry" className="text-lg flex justify-between items-end text-gannet-600"><span>Enquiry</span><span className="text-xs text-red-500">Required</span></label>
								<textarea name="enquiry" id="enquiry" required cols="30" rows="10" className="shadow-md mt-1 block w-full sm:text-sm rounded-none border-gray-900 bg-white"></textarea>
							</div>
					</div>

				
					<div className="col-span-2 md:col-span-1 text-center">
						<div className="flex justify-center items-center p-2">
							<div className="space-y-4 mt-4 w-full">
								
								<label htmlFor="name" className="text-lg flex justify-between items-end text-gannet-600"><span>Name</span><span className="text-xs text-red-500 ">Required</span></label>
							<div className="mt-1 flex shadow-md">
								<input type="text" name="name" required className="flex-1 block w-full sm:text-sm rounded-none border border-gray-900 dark:border-gray-100 bg-white"></input>
							</div>

							<div className="pb-11">
								<label htmlFor="email" className="text-lg flex justify-between items-end text-gannet-600"><span>Email</span><span className="text-xs text-red-500">Required</span></label>
								<div className="mt-1 flex shadow-md">
									<input type="email" name="email" required className="flex-1 block w-full sm:text-sm rounded-none border border-gray-900 dark:border-gray-100 bg-white"></input>
								</div>
							</div>
							</div>

						</div>
							<div className="p-2 space-y-6">
								<button type="submit" className="rounded-none p-2 w-full focus:outline-none focus:ring-2 focus:ring-offset-2 shadow-md bg-gray-800 text-[#222] bg-gannet-400 hover:bg-gannet-600 hover:text-white transition duration-300"><p className="text-lg">Send</p>
								</button>
						</div>
					
					</div>
				
					
				</div>
				
			{/* <div className="lg:flex">
				<div className="w-full lg:w-1/2 bg-blue-300 h-20">text area</div>
				<div className="w-full lg:w-1/2 bg-green-300">name
					<p className="w-full bg-red-300">email</p>
				</div>
			</div>
				<div className="w-full bg-purple-300 h-10">send button</div> */}


			{/* <div className="">
				<div className="min-h-screen">
					<form action="https://formsubmit.co/1katytogo@gmail.com" method="POST" className=""> */}

					{/* <div className="text-3xl text-gannet-600 text-center"><h1 className="font-slab">Get in touch!</h1>
					</div> */}

						{/* text area field  */}
						{/* <div className="col-span-12 lg:col-span-6">
							<div className="mb-5">
								<label htmlFor="enquiry" className="text-lg flex justify-between items-end text-gannet-600"><span>Enquiry</span><span className="text-xs text-red-500">Required</span></label>
								<textarea name="enquiry" id="enquiry" required cols="30" rows="10" className="shadow-md mt-1 block w-full sm:text-sm rounded-none border-gray-900 dark:border-gray-100 bg-white"></textarea>
							</div>
						</div> */}
						
							{/* name  */}
						{/* <div className="mb-5 col-span-6 lg:col-start-7 lg:col-span-6">
							<label htmlFor="name" className="text-lg flex justify-between items-end text-gannet-600"><span>Name</span><span className="text-xs text-red-500 ">Required</span></label>
							<div className="mt-1 flex shadow-md">
								<input type="text" name="name" required className="flex-1 block w-full sm:text-sm rounded-none border border-gray-900 dark:border-gray-100 bg-white"></input>
							</div>
						</div> */}

						{/* email  */}
						{/* <div className="mb-5 col-span-6 lg:col-start-7 lg:col-span-6">
							<label htmlFor="email" className="text-lg flex justify-between items-end text-gannet-600"><span>Email</span><span className="text-xs text-red-500">Required</span></label>
							<div className="mt-1 flex shadow-md">
								<input type="email" name="email" required className="flex-1 block w-full sm:text-sm rounded-none border border-gray-900 dark:border-gray-100 bg-white"></input>
							</div>
						</div> */}

						{/* send button */}
						{/* <div>
							<button type="submit" className="rounded-none p-2 w-full focus:outline-none focus:ring-2 focus:ring-offset-2 shadow-md bg-gray-800 text-[#222] bg-gannet-400 hover:bg-gannet-600 hover:text-white transition duration-300"><p className="text-lg">Send</p></button>
						</div> */}


{/* 				
				<div className="mb-10">
					<h1 className="font-slab text-4xl mb-3 text-gannet-600">Get in touch</h1>
					<p className="font-medium text-lg mb-5 text-gannet-600">We&apos;ll get back to you as soon as we can.</p>
				</div>
				<div className="mb-5">
					<label htmlFor="enquiry" className="text-lg flex justify-between items-end text-gannet-600"><span>Enquiry</span><span className="text-xs text-red-500">Required</span></label>
					<textarea name="enquiry" id="enquiry" required cols="30" rows="10" className="shadow-md mt-1 block w-full sm:text-sm rounded-none border-gray-900 dark:border-gray-100 bg-white"></textarea>
				</div>
				<div className="mb-5">
					<label htmlFor="name" className="text-lg flex justify-between items-end text-gannet-600"><span>Name</span><span className="text-xs text-red-500 ">Required</span></label>
					<div className="mt-1 flex shadow-md">
						<input type="text" name="name" required className="flex-1 block w-full sm:text-sm rounded-none border border-gray-900 dark:border-gray-100 bg-white"></input>
					</div>
				</div>
				<div className="mb-5">
					<label htmlFor="email" className="text-lg flex justify-between items-end text-gannet-600"><span>Email</span><span className="text-xs text-red-500">Required</span></label>
					<div className="mt-1 flex shadow-md">
						<input type="email" name="email" required className="flex-1 block w-full sm:text-sm rounded-none border border-gray-900 dark:border-gray-100 bg-white"></input>
					</div>
				</div>

				<div>
					<button type="submit" className="font-medium rounded-none p-2 w-full focus:outline-none focus:ring-2 focus:ring-offset-2 shadow-md bg-gray-800 text-[#222] bg-gannet-400 hover:bg-gannet-600 hover:text-white transition duration-300">Send</button>
				</div> */}
			</form>
		</div>
			</div>
    </>
  )
}

export default contact