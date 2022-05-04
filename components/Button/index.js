import React from 'react'
import Link from 'next/link';

const Button = () => {
  return (
		<div className="col-span-2 md:col-span-1 text-center bg-[#222] pt-4">
			<div className="flex justify-center items-center py-6 w-full p-5">
				{/* <button className="bg-gannet-400 p-2 border-2 border-[#222] rounded-md hover:bg-gannet-600 hover:text-gannet-200 hover:border-gannet-200 transition duration-300 ease-in-out">Contact button here?
				</button> */}
				<Link href="/contact">
					<a className="bg-gannet-400 px-6 p-2 border-2 border-[#222] rounded-md hover:bg-gannet-600 hover:text-gannet-200 transition duration-300 ease-in-out text-lg">Contact us</a>
				</Link>
			</div>
		</div>
  	)
}

export default Button