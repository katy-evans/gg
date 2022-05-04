// import Link from 'next/link'
// import { useState } from 'react';

// const Nav = () => {

// const [active, setActive] = useState(false);

// const handleClick = () => {
//     setActive(!active)
// }

//   return (
//     <>
//       <nav className="sticky md:flex md:items-center mx-auto md:justify-between h-16 top-0 bg-[#222]">
       
//           <button
//             className="flex p-5 md:hidden text-gannet-600 hover:text-gannet-800 outline-none transition duration-300 ease-in-out bg-[#222]"
//             onClick={handleClick}
//           >
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M4 6h16M4 12h16M4 18h16"
//               />
//             </svg>
			
//           </button>
      

//         <div
//           className={`${
//             active ? "" : "hidden"
//           } mx-auto md:inline-flex md:flex-grow md:w-auto h-full w-full`}
//         >
//           <ul className="md:flex uppercase text-xs justify-evenly items-center md:static md:w-auto transition-all ease-in duration-500 text-gannet-700 py-2 h-screen md:h-auto text-center bg-[#222]">
//             <li className="mx-6 my-6 md:my-0">
//               <Link href="/about">
//                 <a
//                   className={`hover:text-gannet-500  ${active ? "" : "block"}`}
//                   onClick={handleClick}
//                 >
//                   About
//                 </a>
//               </Link>
//             </li>
//             <li className="mx-6 my-6 md:my-0">
//               <Link href="/services">
//                 <a
//                   className={`hover:text-gannet-500 ${active ? "" : "block"}`}
//                   onClick={handleClick}
//                 >
//                   Services
//                 </a>
//               </Link>
//             </li>
//             <li className="mx-6 my-6 md:my-0">
//               <Link href="/contact">
//                 <a
//                   className={`hover:text-gannet-500 ${active ? "" : "block"}`}
//                   onClick={handleClick}
//                 >
//                   Contact
//                 </a>
//               </Link>
//             </li>
//             <li className="mx-6 my-6 md:my-0">
//               <Link href="/">
//                 <a
//                   className={`hover:text-gannet-500 ${active ? "" : "block"}`}
//                   onClick={handleClick}
//                 >
//                   Home
//                 </a>
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     </>
//   );
// }

// export default Nav;

// // import Link from 'next/link'
// // import { useState } from 'react';

// // const Nav = () => {

// // const [active, setActive] = useState(false);

// // const handleClick = () => {
// //     setActive(!active)
// // }

// //   return (
// //     <>
// //       <nav className="sticky md:flex md:items-center mx-auto md:justify-between backdrop-blur-sm h-12 md:sticky top-0 shadow-md bg-white">
// //         {/* <button className="flex items-center text-green-500 p-2 hover:text-green-700 transition duration-500 ease-in-out">
// //           logo
// //         </button> */}

// //         <button
// //           className="flex p-3 md:hidden text-gannet-600 hover:text-gannet-800 outline-none transition duration-300 ease-in-out"
// //           onClick={handleClick}
// //         >
// //           <svg
// //             className="w-6 h-6"
// //             fill="none"
// //             stroke="currentColor"
// //             viewBox="0 0 24 24"
// //             xmlns="http://www.w3.org/2000/svg"
// //           >
// //             <path
// //               strokeLinecap="round"
// //               strokeLinejoin="round"
// //               strokeWidth={2}
// //               d="M4 6h16M4 12h16M4 18h16"
// //             />
// //           </svg>
// //         </button>

// //         <div
// //           className={`${
// //             active ? "" : "hidden"
// //           } mx-auto md:inline-flex md:flex-grow md:w-auto`}
// //         >
// //           <ul className="md:flex uppercase text-xs justify-evenly items-center  md:static  md:w-auto opacity-100 transition-all ease-in duration-500 text-gannet-700 bg-white py-2 h-screen md:h-auto text-center">
// //             <li className="mx-4 my-6 md:my-0">
// //               <Link href="/about">
// //                 <a className="hover:font-bold">About</a>
// //               </Link>
// //             </li>
// //             <li className="mx-4 my-6 md:my-0">
// //               <Link href="/services">
// //                 <a className="hover:font-bold">Services</a>
// //               </Link>
// //             </li>
// //             <li className="mx-4 my-6 md:my-0">
// //               <Link href="/contact">
// //                 <a className="hover:font-bold">Contact</a>
// //               </Link>
// //             </li>
// //             <li className="mx-4 my-6 md:my-0">
// //               <Link href="/">
// //                 <a className="hover:font-bold">Home</a>
// //               </Link>
// //             </li>
// //           </ul>
// //         </div>
// //       </nav>
// //     </>
// //   );
// // }

// // export default Nav;

import Link from 'next/link'
import { useState } from 'react'
// import styles from './navstyles.scss';

function NavLink({to, children}) {
    return <a href={to} className={`mx-4 hover:text-gannet-500`}>
        {children}
    </a>
}

function MobileNav({open, setOpen}) {
    return (
      <div
        className={`absolute top-0 left-0 h-screen w-screen bg-[#222] transform transition duration-500 ${
          open ? "-translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out filter drop-shadow-md `}
      >
        <div className="flex items-center justify-center filter drop-shadow-md bg-[#222] h-20">
          {" "}
          <div className="">
            <img
              src="/images/ggwlogo.png"
              alt="green gannet logo"
              width="65"
              height="65"
            />
          </div>
        </div>

        <div className="m-20 flex justify-center items-center">
          <div className="flex flex-col uppercase text-center font-display">
            <Link href="/">
              <a
                className="text-sm font-medium my-4 text-gannet-700 hover:text-gannet-500"
                onClick={() =>
                  setTimeout(() => {
                    setOpen(!open);
                  }, 100)
                }
              >
                Home
              </a>
            </Link>

            <Link href="/services">
              <a
                className="text-sm font-normal my-4 text-gannet-700 hover:text-gannet-500"
                onClick={() =>
                  setTimeout(() => {
                    setOpen(!open);
                  }, 100)
                }
              >
                Services
              </a>
            </Link>

            <Link href="/menu">
              <a
                className="text-sm font-normal my-4 text-gannet-700 hover:text-gannet-500"
                onClick={() =>
                  setTimeout(() => {
                    setOpen(!open);
                  }, 100)
                }
              >
                Menus
              </a>
            </Link>

            <Link href="/contact">
              <a
                className="text-sm font-normal my-4 text-gannet-700 hover:text-gannet-500"
                onClick={() =>
                  setTimeout(() => {
                    setOpen(!open);
                  }, 100)
                }
              >
                Contact
              </a>
            </Link>
          </div>
        </div>
      </div>
    );
}

export default function Navbar() {

    const [open, setOpen] = useState(false)
    return (
      <nav className="sticky top-0 flex filter drop-shadow-md bg-[#222] px-4 py-4 h-20 items-center">
        <MobileNav open={open} setOpen={setOpen} />

        <div className="w-3/12 flex items-center">
          {/* <Link href="/">
            <a className="text-2xl text-gannet-700 hover:text-gannet-500 font-semibold">
              <img
                src="/images/greengannetlogo.png"
                alt="green gannet logo"
                width="50"
                height="50"
              />
            </a>
          </Link> */}
        </div>

        <div className="w-9/12 flex justify-end items-center">
          <div
            className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden"
            onClick={() => {
              setOpen(!open);
            }}
          >
            {/* hamburger icon */}
            <span
              className={`h-1 w-full bg-gannet-700 rounded-lg transform transition duration-300 ease-in-out ${
                open ? "rotate-45 translate-y-3.5" : ""
              }`}
            />
            <span
              className={`h-1 w-full bg-gannet-700 rounded-lg transition-all duration-300 ease-in-out ${
                open ? "w-0" : "w-full"
              }`}
            />
            <span
              className={`h-1 w-full bg-gannet-700 rounded-lg transform transition duration-300 ease-in-out ${
                open ? "-rotate-45 -translate-y-3.5" : ""
              }`}
            />
          </div>

          <div className="hidden md:flex text-gannet-700 uppercase text-sm font-display">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/menu">Menus</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>
        </div>
      </nav>
    );
}