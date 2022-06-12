import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="bg-[#222] p-4 border-t border-[#111] pt-5">
		<ul className="flex flex-wrap space-x-4 justify-center items-center p-2">
			<li>
			<Link href="https://www.facebook.com/Greengannetfoodco/">
				<a target="__blank" rel="noOpener noReferrer">
				<FontAwesomeIcon
					icon={faFacebook}
					className="w-6 h-6 text-gannet-500 hover:text-gannet-700"
				/>
				</a>
			</Link>
			</li>
			<li>
			<Link href="https://www.instagram.com/greengannetfoodco/?hl=en">
				<a target="__blank" rel="noOpener noReferrer">
				<FontAwesomeIcon icon={faInstagram} className="w-6 h-6 text-gannet-500 hover:text-gannet-700" />
				</a>
			</Link>
			</li>
		</ul>

		<div className="flex justify-center items-center pt-4 pb-6">
			<p className="text-gannet-700 text-sm font-display">&#169;greengannetfoodco 2022</p>
		</div>
    </div>
  );
}

export default Footer