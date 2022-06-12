import React from 'react'

const contact = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto">
        <section className="">
          <div className="grid grid-cols-2 min-h-screen">
            <div className="col-span-2 flex justify-center items-center md:-mt-40">
              <div className="w-full p-6 m-4">
                <div className="text-center top-20 md:flex md:justify-center">
                  <div className="space-y-8 text-[#b0c5c2]">
                    <div className="flex justify-center items-center">
                      <div className="col-span-2 flex justify-center items-center -mt-20">
                        <div className="w-full p-6 m-4 mt-10 md:mt-8">
                          <div className="text-center top-20 md:flex md:justify-center">
                            <div className="space-y-8 text-[#b0c5c2]">
                              <h1 className="text-4xl text-gannet-500 font-slab">
                                Get in touch!
                              </h1>
                              <div>
                                <p>
                                  We&apos;ll get back to you as soon as we can.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <hr></hr>
                </div>
              </div>
            </div>

            <div className="col-span-2 md:-mt-36 md:-mb-36">
              <form
                action="https://formsubmit.co/1katytogo@gmail.com"
                method="POST"
                className=""
              >
			  
                {/* -----  message / submit  ----- */}

                <div className="grid grid-cols-2 gap-4 md:gap-6 lg:gap-14 h-full mx-6">
                  <div className="col-span-2 md:col-span-1 p-2 md:m-6">
                    <label
                      htmlFor="enquiry"
                      className="text-lg flex justify-between items-end text-gannet-600"
                    >
                      <span>Enquiry</span>
                      <span className="text-xs text-red-500">Required</span>
                    </label>
                    <textarea
                      name="enquiry"
                      id="enquiry"
                      required
                      cols="30"
                      rows="15"
                      className="shadow-md mt-1 block w-full sm:text-sm rounded-none border-gray-900 bg-white"
                    ></textarea>
                  </div>

                  {/* -----  / name / ----- */}
                  <div className="col-span-2 md:col-span-1 text-center">
                    <div className="flex justify-center items-center p-2">
                      <div className="py-4 mt-4 w-full">
                        <label
                          htmlFor="name"
                          className="text-lg flex justify-between items-end text-gannet-600"
                        >
                          <span>Name</span>
                          <span className="text-xs text-red-500">Required</span>
                        </label>
                        <div className="mt-1 flex shadow-md pb-2">
                          <input
                            type="text"
                            name="name"
                            required
                            className="flex-1 block w-full sm:text-sm rounded-none border border-gray-900 dark:border-gray-100 bg-white"
                          ></input>
                        </div>

                        {/* -----  / email / ----- */}
                        <div className="">
                          <label
                            htmlFor="email"
                            className="text-lg flex justify-between items-end text-gannet-600"
                          >
                            <span>Email</span>
                            <span className="text-xs text-red-500">
                              Required
                            </span>
                          </label>
                          <div className="mt-1 flex shadow-md pb-2">
                            <input
                              type="email"
                              name="email"
                              required
                              className="flex-1 block w-full sm:text-sm rounded-none border border-gray-900 dark:border-gray-100 bg-white"
                            ></input>
                          </div>
                        </div>

                        {/* -----  / phone /  ----- */}
                        <label
                          htmlFor="phone"
                          className="text-lg flex justify-between items-end text-gannet-600"
                        >
                          <span>Phone</span>
                          <span className="text-xs text-red-500">Required</span>
                        </label>
                        <div className="mt-1 flex shadow-md pb-2">
                          <input
                            type="phone"
                            name="phone"
                            required
                            className="flex-1 block w-full sm:text-sm rounded-none border border-gray-900 dark:border-gray-100 bg-white"
                          ></input>
                        </div>
        

                        {/* ----- / number of guests / ----- */}
                        <div className="col-span-2 md:col-span-1">
                          <label
                            htmlFor="atendees"
                            className="text-lg flex justify-between items-end text-gannet-600"
                          >
                            <span>Guests</span>
                            <span className="text-xs text-red-500">
                              Required
                            </span>
                          </label>
						  
            
                          <div className="mt-1 flex shadow-md">
                            <select
                              name="atendees"
                              id="atendees"
                              className="w-full"
                            >
                              <option value="javascript">
                                Number of guests
                              </option>
                              <option value="10">10</option>
                              <option value="20">20</option>
                              <option value="30">30</option>
                              <option value="40">40</option>
                              <option value="50">50</option>
                              <option value="60">60</option>
                              <option value="70">70</option>
                              <option value="80">80</option>
                            </select>
                          </div>
                        </div>

                        <div className="pt-9 pb-12 mb-6">
                          <button
                            type="submit"
                            className="p-2 w-full focus:outline-none focus:ring-2 focus:ring-offset-2 shadow-md rounded-md bg-gannet-400 text-[#222] hover:bg-gannet-600 hover:text-white transition duration-300 border-2 border-gannet-800 hover:border-gannet-400"
                          >
                            <p className="text-lg">Submit</p>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default contact