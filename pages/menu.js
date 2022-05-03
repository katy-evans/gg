import React from 'react'

const Menu = () => {
  return (
		<>
		<div className="max-w-7xl mx-auto">
			<section>
				<div className="grid grid-cols-2 h-full gap-4">

					<div className="col-span-2 flex justify-center items-center">
						<div className="w-full p-6 m-4">
							<div className="text-center top-20 md:flex md:justify-center">
								<div className="space-y-8 text-[#b0c5c2]">
									<h1 className="text-4xl text-gannet-500 font-slab">
									Menu
									</h1>
									<div className="text-lg font-display">
										<p>Alex Stewart, chef and firestarter has gathered a wealth of experience in the hospitality industry having worked at some of the leading luxury hotels, tourist attractions, restaurants and catering company's in Scotland.</p> 
										
										<p>He loves to work with clients on an individual basis to share his fresh, innovative and modern ideas to create bespoke and memorable menus for any occasion. </p>
									</div>
								</div>
							</div>
								<div className="mt-8">
									<hr></hr>
								</div>
						</div>
					</div>

					<div className="col-span-2 text-center text-neutral-400 mx-10 pb-12 font-display">
						<h2>Take a look below at some of the menu options we have prepared to whet your appetite.</h2>
					</div>
				</div>
			</section>

			<div className="grid grid-cols-2 gap-4 md:gap-6 lg:gap-8 pb-6">
				<section className="col-span-2 lg:col-span-1 bg-gannet-400 p-2 md:p-0 mx-14">
					<div className="h-full">
						<div className="col-span-2 flex justify-center items-center text-center">
							<div className="p-8 max-w-lg space-y-4 font-display">
								<h3 className="underline font-semibold">Menu One</h3>
									<ul className="italic">
										<li>menu item</li>
										<li>menu item</li>
										<li>menu item</li>
										<li>menu item</li>
										<li>menu item</li>
										<li>menu item</li>
										<li>menu item</li>
										<li>menu item</li>
									</ul> 
							</div>
						</div>
					</div>
				</section>
				<section className="col-span-2 lg:col-span-1 bg-gannet-400 p-2 md:p-0 mx-14">
					<div className="h-full">
						<div className="col-span-2 flex justify-center items-center text-center">
							<div className="p-8 max-w-lg space-y-4 font-display">
								<h3 className="underline font-semibold">Menu Two</h3>
								<ul className="italic">
									<li>menu item</li>
									<li>menu item</li>
									<li>menu item</li>
									<li>menu item</li>
									<li>menu item</li>
									<li>menu item</li>
									<li>menu item</li>
									<li>menu item</li>
								</ul> 
							</div>
						</div>
					</div>
				</section>
				<section className="col-span-2 lg:col-span-1 bg-gannet-400 p-2 md:p-0 mx-14">
					<div className="h-full">
						<div className="col-span-2 flex justify-center items-center text-center">
							<div className="p-8 max-w-lg space-y-4 font-display">
								<h3 className="underline font-semibold">Menu Three</h3>
								<ul className="italic">
									<li>menu item</li>
									<li>menu item</li>
									<li>menu item</li>
									<li>menu item</li>
									<li>menu item</li>
									<li>menu item</li>
									<li>menu item</li>
									<li>menu item</li>
								</ul> 
							</div>
						</div>
					</div>
				</section>
				<section className="col-span-2 lg:col-span-1 bg-gannet-400 p-2 md:p-0 mx-14">
					<div className="h-full">
						<div className="col-span-2 flex justify-center items-center text-center">
							<div className="p-8 max-w-lg space-y-4 font-display">
								<h3 className="underline font-semibold">Menu Four</h3>
								<ul className="italic">
									<li>menu item</li>
									<li>menu item</li>
									<li>menu item</li>
									<li>menu item</li>
									<li>menu item</li>
									<li>menu item</li>
									<li>menu item</li>
									<li>menu item</li>
								</ul> 
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
    </>
  )
}

export default Menu