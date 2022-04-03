import Link from 'next/link'
import { useState } from 'react';

const Nav = () => {

const [active, setActive] = useState(false);

const handleClick = () => {
    setActive(!active)
}

  return (
    <>
      <nav className="sticky md:flex md:items-center mx-auto md:justify-between h-16 top-0 bg-[#222]">
       
          <button
            className="flex p-5 md:hidden text-gannet-600 hover:text-gannet-800 outline-none transition duration-300 ease-in-out bg-[#222]"
            onClick={handleClick}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
			
          </button>
      

        <div
          className={`${
            active ? "" : "hidden"
          } mx-auto md:inline-flex md:flex-grow md:w-auto`}
        >
          <ul className="md:flex uppercase text-xs justify-evenly items-center md:static md:w-auto transition-all ease-in duration-500 text-gannet-700 py-2 h-screen md:h-auto text-center bg-red-300 z-100">
            <li className="mx-4 my-6 md:my-0">
              <Link href="/about">
                <a
                  className={`hover:font-bold  ${active ? "" : "block"}`}
                  onClick={handleClick}
                >
                  About
                </a>
              </Link>
            </li>
            <li className="mx-4 my-6 md:my-0">
              <Link href="/services">
                <a
                  className={`hover:font-bold ${active ? "" : "block"}`}
                  onClick={handleClick}
                >
                  Services
                </a>
              </Link>
            </li>
            <li className="mx-4 my-6 md:my-0">
              <Link href="/contact">
                <a
                  className={`hover:font-bold ${active ? "" : "block"}`}
                  onClick={handleClick}
                >
                  Contact
                </a>
              </Link>
            </li>
            <li className="mx-4 my-6 md:my-0">
              <Link href="/">
                <a
                  className={`hover:font-bold ${active ? "" : "hidden"}`}
                  onClick={handleClick}
                >
                  Home
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Nav;

// import Link from 'next/link'
// import { useState } from 'react';

// const Nav = () => {

// const [active, setActive] = useState(false);

// const handleClick = () => {
//     setActive(!active)
// }

//   return (
//     <>
//       <nav className="sticky md:flex md:items-center mx-auto md:justify-between backdrop-blur-sm h-12 md:sticky top-0 shadow-md bg-white">
//         {/* <button className="flex items-center text-green-500 p-2 hover:text-green-700 transition duration-500 ease-in-out">
//           logo
//         </button> */}

//         <button
//           className="flex p-3 md:hidden text-gannet-600 hover:text-gannet-800 outline-none transition duration-300 ease-in-out"
//           onClick={handleClick}
//         >
//           <svg
//             className="w-6 h-6"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M4 6h16M4 12h16M4 18h16"
//             />
//           </svg>
//         </button>

//         <div
//           className={`${
//             active ? "" : "hidden"
//           } mx-auto md:inline-flex md:flex-grow md:w-auto`}
//         >
//           <ul className="md:flex uppercase text-xs justify-evenly items-center  md:static  md:w-auto opacity-100 transition-all ease-in duration-500 text-gannet-700 bg-white py-2 h-screen md:h-auto text-center">
//             <li className="mx-4 my-6 md:my-0">
//               <Link href="/about">
//                 <a className="hover:font-bold">About</a>
//               </Link>
//             </li>
//             <li className="mx-4 my-6 md:my-0">
//               <Link href="/services">
//                 <a className="hover:font-bold">Services</a>
//               </Link>
//             </li>
//             <li className="mx-4 my-6 md:my-0">
//               <Link href="/contact">
//                 <a className="hover:font-bold">Contact</a>
//               </Link>
//             </li>
//             <li className="mx-4 my-6 md:my-0">
//               <Link href="/">
//                 <a className="hover:font-bold">Home</a>
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     </>
//   );
// }

// export default Nav;