import React from "react";
import Button from "../../components/Button";
import Image from "next/image";

const Landing = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <section>
        <div className="grid grid-cols-2 h-full">
          {/* <div className="grid grid-cols-2 gap-4 md:gap-8 h-full"> */}
          <div className="col-span-2 flex justify-center items-center">
            <div className="w-full p-6 m-4">
              <div className="text-center top-20 md:flex md:justify-center">
                <div className="space-y-8 text-[#b0c5c2]">
                  <div className="flex justify-center items-center">
                    <img
                      src="/images/greengannetlogo.png"
                      alt="green gannet logo"
                      width="200"
                      height="200"
                      className="object-cover"
                    />
                  </div>

                  <div className="text-lg font-display leading-relaxed tracking-wide">
                    <p>
                      Green Gannet Food Co ltd is a family run company based in
                      Falkirk specialising in all things slow smoked &amp; BBQ.
                      We cater for both formal and informal events such as
                      weddings, corporate days, family gatherings, garden
                      party&apos;s and street food pop ups across Central
                      Scotland.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <hr></hr>
              </div>
            </div>
          </div>

          <div className="p-2 col-span-2 flex justify-center items-center text-center pb-10 leading-7 tracking-wide">
            <div className="text-neutral-400">
              <h2>Our ethos is simple</h2>
              <h3 className="text-2xl italic">
                &quot;Quality produce cooked over coals&quot;
              </h3>
            </div>
          </div>

          <div className="col-span-2 text-center mx-auto">
            <div className="flex justify-center items-center">
              <div className="w-full mx-4">
                <img
                  src="/images/trailer2.jpg"
                  alt="trailer"
                  className="object-cover"
                />

                {/* <Image
				src={"/images/trailer2.jpg"}
				alt={"trailer"}
				width={1500}
				height={1100}
				className="object-cover"
			/> */}
              </div>
            </div>
          </div>

          <div className="col-span-2 flex justify-center items-center text-center mx-4 mt-4 pt-6 text-[#b0c5c2] font-display leading-7 tracking-wide">
            <p>
              Serving straight out of a profesionally converted cattle truck
              which has been customised to include our giant ceramic Kamado Joe
              grill &ldquo;Big Joe&ldquo; which is fuelled with sustainably
              sourced and produced Scottish charcoal from Weir Forestry. Our set
              up is a guaranteed talking point at your event.
            </p>
          </div>
        </div>
      </section>

      {/* <section className="bg-gannet-400 p-2 md:p-0">
        <div className="grid grid-cols-2 h-full">
         
          <div className="col-span-2 md:col-span-1 flex justify-center items-center text-center">
            <p className="p-8 font-display">
              Quis elit proident laboris exercitation consequat officia do Lorem
              quis velit commodo. Lorem labore esse adipisicing non sit cillum.
              Irure velit ex sit Lorem et reprehenderit duis commodo velit
              mollit.
            </p>
          </div>

          <div className="col-span-2 md:col-span-1 text-center">
            <div className="flex justify-center items-center p-2 md:p-0">
              <div className="">
                <img
                  src="/images/alex.jpg"
                  alt="kamado-food"
                  className="object-fit"
                />
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <Button />
    </div>
  );
};

export default Landing;

// import React from 'react'
// import Image from "next/image";

// const Landing = () => {
//   return (
//     <div className="max-w-7xl mx-auto">
// 		<section className="">
// 			{/* comment starts ----- <div className="flex justify-center items-center w-full relative">
// 			<Image
// 				src={"/images/main-image.jpg"}
// 				alt={"bbq food"}
// 				width={1500}
// 				height={1100}
// 				className="object-cover opacity-40"
// 			/>
// 			<div className="bg-gannet-700 w-full h-40">
// 			<div className="top-20 flex justify-center">
// 				<h1 className="text-4xl text-gannet-500 font-slab mt-14">
// 				Green Gannet food co logo
// 				</h1>
// 			</div>
// 			</div> comment ends ------ */}
// 			<div className="col-span-2 text-center mx-4 md:mx-0">
// 						<div className="flex justify-center items-center">
// 							<div className="w-full">
// 								<img src="/images/copy-image-copy.png" alt="food" className="object-cover object-bottom h-44 w-full"/>
// 							</div>
// 						</div>
// 						<div className="p-8">
// 							<h1 className="text-4xl font-slab text-gannet-500">Green Gannet Food co</h1>
// 						</div>
// 					</div>
// 			{/* comment this ------ </div> */}
// 		</section>

// 		{/* commented ------ <section className="w-full h-56 mt-6">
// 			<div className="flex justify-center items-center border-2 border-black shadow-lg h-56">
// 			<h2 className="text-gannet-200">slider of images here?</h2>
// 			</div>
// 		</section> commented end ------ */}

// 		<div className="p-2 text-center">
// 			<h2 className="text-neutral-400 text-xl font-display">Quality produce, locally sourced</h2>
// 		</div>

// 		<div className="bg-gannet-800 h-56 w-full flex justify-center items-center">
// 			<p className="">image?</p>
// 		</div>

// 		<div className="text-neutral-400 text-lg italic m-4 p-4 text-center font-display">
// 			<p>Irure velit ex sit Lorem et reprehenderit duis commodo velit
// 			mollit.
// 			</p>
// 		</div>

// 		<section className="bg-gannet-400 p-2">
// 				<div className="grid grid-cols-2 gap-4 md:gap-6 lg:gap-14 h-full">
// 					<div className="col-span-2 md:col-span-1 text-center flex justify-center items-center m-4 font-display">
// 						<p>
// 						Quis elit proident laboris exercitation consequat officia do Lorem
// 						quis velit commodo. Lorem labore esse adipisicing non sit cillum.
// 						Irure velit ex sit Lorem et reprehenderit duis commodo velit
// 						mollit.
// 						</p>
// 					</div>

// 					<div className="col-span-2 md:col-span-1 text-center">
// 						<div className="flex justify-center items-center p-2">
// 							<div className="bg-gannet-900 w-full">
// 								<img src="/images/firefood.jpg" alt="food" className="object-cover"/>
// 							</div>
// 							<p className="p-2 font-display">
// 								Quis elit proident laboris exercitation consequat officia do
// 								Lorem
// 							</p>
// 						</div>
// 					</div>
// 				</div>
// 		</section>

// 		<div className="col-span-2 md:col-span-1 text-center bg-[#222]">
// 			<div className="flex justify-center items-center mt-6">
// 				<div className="w-full">
// 					<div className="w-full">
// 						<div className="p-6">
// 							<p className="p-4 border-2 border-gannet-600 rounded-md font-display text-gannet-200">"Bangin' burgers mate!"
// 								<p>
// 									-Quote?-
// 								</p>
// 							</p>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
//     </div>
//   );
// }

// export default Landing
