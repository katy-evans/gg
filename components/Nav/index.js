import Link from 'next/link'

const Nav = () => {
  return (
        <>
            {/* <div className="md:hidden flex justify-end">
                <button className="flex items-center text-green-500 p-3 hover:text-green-700 transition duration-500 ease-in-out">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>
            <ul className="hidden absolute top-1/2 left-1/2 transform bg-green-200">
                <li>about</li>
                <li>services</li>
                <li>contact</li>
            </ul> */}

            {/* <section className="flex justify-center items-center">
                <h1 className="text-2xl text-green-600">green gannet</h1>
            </section> */}

            <nav className="md:flex md:items-center mx-auto md:justify-between md:backdrop-blur-md md:h-16 md:sticky top-0">

                <button className="flex items-center text-green-500 p-2 hover:text-green-700 transition duration-500 ease-in-out">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                </button>

                <ul className="md:flex uppercase text-xs items-center z-[-1] md:z-auto md:static absolute w-full md:w-auto">
                    <li className="mx-4 my-6 md:my-0 bg-neutral-200/30 ">
                        <Link href="#">
                            <a>about</a>
                        </Link>
                    </li>
                    <li className="mx-4 my-6 md:my-0">
                        <Link href="#">
                            <a>services</a>
                        </Link>
                    </li>
                    <li className="mx-4 my-6 md:my-0">
                        <Link href="#">
                            <a>contact</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Nav;