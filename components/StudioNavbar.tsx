import React from 'react';
import Link from 'next/link';
import { ArrowUturnLeftIcon } from '@heroicons/react/24/solid';

function StudioNavbar(props: any) {
  return (
    <div>
        <div className="flex items-center justify-between p-5">
            <Link 
                href="/"
                className="text-[#F7AB0A] flex items-center"
            >
                <ArrowUturnLeftIcon className="w-6 h-6 mr-2 text-[#F7AB0A]" />
                Go To Website
            </Link>

            <div className="hidden md:flex p-5 rounded-lg justify-center border-2 border-[#F7AB0A]">
              <h1 className="font-bold text-white">
                Want coding challenges & Solutions sent to your inbox daily? 👉
              </h1>
              <Link
                href='/'
                className="text-[#F7AB0A] font-bold ml-2"
              >
                Subscribe
              </Link>
            </div>
        </div>

        <>{ props.renderDefault(props) }</>
    </div>
  )
}

export default StudioNavbar