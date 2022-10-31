import React from 'react'

const Menu = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto">
        <section className="leading-7 tracking-wide">
          <div className="grid grid-cols-2 h-full gap-4">
            <div className="col-span-2 flex justify-center items-center">
              <div className="w-full p-6 m-4">
                <div className="text-center top-20 md:flex md:justify-center">
                  <div className="space-y-8 text-[#b0c5c2]">
                    <h1 className="text-4xl text-gannet-500 font-slab">Menu</h1>
                    <div className="text-lg font-display">
                      <div className="p-4 lg:p-0">
                        <p>
                          Alex Stewart, chef and firestarter has gathered a
                          wealth of experience in the hospitality industry
                          having worked at some of the leading luxury hotels,
                          tourist attractions, restaurants and catering
                          company&apos;s in Scotland.
                        </p>
                      </div>
                      <div>
                        <p>
                          He loves to work with clients on an individual basis
                          to share his fresh, innovative and modern ideas to
                          create bespoke and memorable menus for any occasion.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <hr></hr>
                </div>
              </div>
            </div>

            <div className="col-span-2 text-center text-neutral-400 mx-10 pb-12 font-display">
              <h2>
                Take a look below at some of the menu options we have prepared
                to whet your appetite.
              </h2>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-2 gap-4 md:gap-6 lg:gap-8 pb-6">
          <section className="col-span-2 bg-gannet-400 p-2 md:p-0 mx-14">
            <div className="h-full">
              <div className="col-span-2 flex justify-center items-center text-center">
                <div className="p-8 max-w-lg space-y-4 font-display">
                  <h3 className="underline font-semibold p-3">
                    From the grill
                  </h3>
                  <h2 className="underline font-semibold p-3">Meat</h2>
                  <ul className="italic">
                    <li>
                      Slow smoke roast beef picanha finished with chimichurri
                      sauce
                    </li>
                    <li>
                      Scottish steak burger, glazed brioche bun, smoked cheese,
                      chutney and pickles
                    </li>
                    <li>
                      Pork and Chorizo hot dog, loaded with smokey pulled pork
                      and crispy onions
                    </li>
                    <li>
                      Lamb Kofta, cucumber pickle, pomegranate yoghurt,
                      flatbread
                    </li>
                    <li>Peri Peri spiced chicken thighs, charred corn salsa</li>
                    <li>
                      Oak smoked pulled pork, soft tortilla, pico de gallo
                      salsa, chipotle sauce
                    </li>
                    <li>
                      Peruvian style spatch cock chicken, slow smoke roasted
                    </li>
                  </ul>

                  <h2 className="underline font-semibold p-3">Fish</h2>
                  <ul className="italic">
                    <li>
                      Soy and ginger marinated salmon skewers, chilli dressing,
                      lime and coriander
                    </li>
                    <li>Whiskey cured, hot oak smoked Scottish salmon</li>
                    <li>
                      Lemon and herb marinated sea bass cooked directly over
                      coals
                    </li>
                    <li>Garlic, chili and ginger king prawn skewers</li>
                    <li>BBQ monkfish, chorizo and salsa verde skewers</li>
                  </ul>

                  <h3 className="underline font-semibold p-3">Salads/Sides</h3>
                  <ul className="italic">
                    <li>BBQ peppers and red onion, harrisa cous cous </li>
                    <li>
                      Asian style salad- red cabbage, radish, chili, soy,
                      ginger, coriander
                    </li>
                    <li>BBQ baked beetroots, toasted bulgerwheat and orange</li>
                    <li>
                      BBQ courgette, fennel, dill, cucumber and feta cheese
                    </li>
                    <li>
                      BBQ spiced squash, spinach, feta cheese and pomegranate
                    </li>
                    <li>Apple and BBQ fennel coleslaw </li>
                    <li>BBQ broccoli, toasted hazelnut dressing</li>
                    <li>
                      Ayrshire potato salad, sour cream, chive and radish ( add
                      pulled ham Hough )
                    </li>
                    <li>Tomato, mozzarella, red onion, basil </li>
                    <li>
                      Skin on fries-Parmesan and rosemary/Peri Peri spiced
                    </li>
                  </ul>
                  <h3 className="underline font-semibold p-3">
                    Something Sweet
                  </h3>
                  <ul className="italic">
                    <li>Lemon and blueberry posset, shortbread</li>
                    <li>
                      Traditional Cranachan - oats, whiskey, heather honey,
                      fruits
                    </li>
                    <li>
                      Traditional Eton Mess- Scottish strawberry&apos;s,
                      homemade meringue and cream
                    </li>
                    <li>
                      Double chocolate brownie, orange and vanilla cream, fruits
                    </li>
                    <li>Ginger and lime cheesecake </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          {/* <section className="col-span-2 lg:col-span-1 bg-gannet-400 p-2 md:p-0 mx-14">
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
				</section> */}
        </div>
      </div>
    </>
  );
}

export default Menu