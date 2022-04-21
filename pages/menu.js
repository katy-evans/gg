import React from 'react'

const Menu = () => {
  return (
		<>
		<div className="max-w-7xl mx-auto">
			<section>
				<div className="grid grid-cols-2 h-full">

					<div className="col-span-2 flex justify-center items-center">
						<div className="w-full p-6 m-4">
							<div className="text-center top-20 md:flex md:justify-center">
								<div className="space-y-8 text-[#b0c5c2]">
									<h1 className="text-4xl text-gannet-500 font-slab">
									Menu
									</h1>
									<div className="text-xl">
										<p>Alex Stewart, chef and firestarter has gathered a wealth of experience in the hospitality industry having worked at some of the leading luxury hotels, tourist attractions, restaurants and catering company's in Scotland. He loves to work with clients on an individual basis to share his fresh, innovative and modern ideas to create bespoke and memorable menus for any occasion. </p>
									</div>
								</div>
							</div>
								<div className="mt-8">
									<hr></hr>
								</div>
						</div>
					</div>

					<div className="col-span-2 text-center text-neutral-400 mx-10">
						<h2>Take a look below at some of the menu options we have prepared to whet your appetite.</h2>
					</div>

					<div className="col-span-2 flex justify-center items-center text-center m-4 pb-6 text-[#b0c5c2] mx-24 border-2 border-gannet-500">
						<div className="flex">
							<div className="p-8 mx-20 space-y-4">
								<h3 className="underline font-semibold">Menu One</h3>
								<p>We play our part in ensuring we are as environmentally friendly as possible by using fully compostable and recyclable products. For a more formal event we also have a range of crockery that can be included in your package.</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="bg-gannet-400 p-2 md:p-0 mx-24">
				<div className="grid grid-cols-2 h-full">
					<div className="col-span-2 flex justify-center items-center text-center">
						<div className="p-8 mx-20 space-y-4">
							<h3 className="underline font-semibold">Menu Two</h3>
							<p>No matter what type of event you are organising, rest assured you will receive locally sourced produce prepared and cooked with care and precision and served up with a smile by our friendly efficient team.</p> 
						</div>
					</div>
				</div>
			</section>
		</div>
    </>
  )
}

export default Menu