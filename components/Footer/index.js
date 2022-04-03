import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="bg-[#222] p-4">
      <ul className="flex flex-wrap space-x-4 justify-center items-center p-2">
        <li>
          <Link href="https://www.facebook.com/Greengannetfoodco/">
            <a target="__blank" rel="noOpener noReferrer">
              <FontAwesomeIcon
                icon={faFacebook}
                className="w-6 h-6 text-black"
              />
            </a>
          </Link>
        </li>
        <li>
          <Link href="https://www.instagram.com/greengannetfoodco/?hl=en">
            <a target="__blank" rel="noOpener noReferrer">
              <FontAwesomeIcon icon={faInstagram} className="w-6 h-6" />
            </a>
          </Link>
        </li>
      </ul>

      <div className="flex justify-center items-center">
        <p className="text-gannet-700">&#169; greengannetfoodco</p>
      </div>
    </div>
  );
}

export default Footer