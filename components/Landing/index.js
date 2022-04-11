import React from 'react'
import Image from "next/image";

const Landing = () => {
  return (
    <>
      <section className="">
        {/* <div className="flex justify-center items-center w-full relative"> */}
        {/* <Image
            src={"/images/main-image.jpg"}
            alt={"bbq food"}
            width={1500}
            height={1100}
            className="object-cover opacity-40"
          /> */}
        <div className="bg-gannet-700 w-full h-40">
          <div className="top-20 flex justify-center">
            <h1 className="text-4xl text-gannet-500 font-slab mt-14">
              Green Gannet food co
            </h1>
          </div>
        </div>
        {/* </div> */}
      </section>

      <section className="w-full h-60 mt-6">
        <div className="flex justify-center items-center">
          <h2 className="text-gannet-200">slider of images here?</h2>
        </div>
      </section>

      <section className="bg-gannet-200 p-3">
        <div className="grid grid-cols-2 gap-10 md:gap-12 lg:gap-14 h-full">
          <div className="col-span-2 md:col-span-1 flex justify-center items-center">
            <p>
              Quis elit proident laboris exercitation consequat officia do Lorem
              quis velit commodo. Lorem labore esse adipisicing non sit cillum.
              Irure velit ex sit Lorem et reprehenderit duis commodo velit
              mollit.
            </p>
          </div>
          <div className="col-span-2 md:col-span-1 text-center">
            <div className="flex justify-center items-center p-2">
				<div className="bg-gannet-900 w-full">
					<img src="/images/firefood.jpg" alt="food" className="object-cover"/>
				</div>
				<p>
					Quis elit proident laboris exercitation consequat officia do
					Lorem
				</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Landing