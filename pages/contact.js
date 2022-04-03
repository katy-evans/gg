import React from 'react'

const contact = () => {
  return (
        <>
      
        <form action="" className="p-10 max-w-xl mx-auto shadow-lg bg-[#222] rounded-md">
        <div className="mb-10">
            <h1 className="font-slab text-4xl mb-3 text-gannet-600">Get in touch</h1>
            <p className="font-medium text-lg mb-5 text-gannet-600">We&apos;ll get back to you as soon as we can.</p>
        </div>
        <div className="mb-5">
            <label htmlFor="enquiry" className="text-lg flex justify-between items-end text-gannet-600"><span>Enquiry</span><span className="text-xs text-red-500">Required</span></label>
            <textarea name="enquiry" id="enquiry" cols="30" rows="10" className="shadow-md mt-1 block w-full sm:text-sm rounded-none border-gray-900 dark:border-gray-100 bg-white"></textarea>
        </div>
        <div className="mb-5">
            <label htmlFor="name" className="text-lg flex justify-between items-end text-gannet-600"><span>Name</span><span className="text-xs text-red-500 ">Required</span></label>
            <div className="mt-1 flex shadow-md">
                {/* <span className="inline-flex items-center px-3 rounded-none border border-r-0 border-gray-900 dark:border-gray-100"><i className="fas fa-user"></i></span> */}
                <input type="text" name="name" className="flex-1 block w-full sm:text-sm rounded-none border border-gray-900 dark:border-gray-100 bg-white"></input>
            </div>
        </div>
        <div className="mb-5">
            <label htmlFor="email" className="text-lg flex justify-between items-end text-gannet-600"><span>Email</span><span className="text-xs text-red-500">Required</span></label>
            <div className="mt-1 flex shadow-md">
                {/* <span className="inline-flex items-center px-3 rounded-none border border-r-0 border-gray-900 dark:border-gray-100"><i className="fas fa-envelope"></i></span> */}
                <input type="email" name="email" className="flex-1 block w-full sm:text-sm rounded-none border border-gray-900 dark:border-gray-100 bg-white"></input>
            </div>
        </div>

		{/* button  */}
        <div>
            <button type="button" className="font-medium rounded-none p-2 w-full focus:outline-none focus:ring-2 focus:ring-offset-2 shadow-md bg-gray-800 text-[#222] bg-gannet-400 hover:bg-gannet-600 hover:text-white transition duration-300"><i className="fas fa-check"></i> Send</button>
        </div>
    </form>
    </>
  )
}

export default contact