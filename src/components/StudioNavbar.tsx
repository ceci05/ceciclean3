import Link from 'next/link';
import React from 'react';
import { ArrowUturnLeftIcon } from '@heroicons/react/24/solid';

const StudioNavbar = (props: any) => {
    return (
        <div>
            <div className='flex items-center justify-between p-5
        '>
                <Link href="/" className='text-[#F7AB0A] flex items-center'>
                    <ArrowUturnLeftIcon className='h-6 v-6 text-[#F7AB0A]' mr-2 />
                    Go to Website</Link>

                <div className="hidden md:flex p-5 rounded-lg justify-center border-2 border-[#F7AB0A]">
                    <h1 className="font-bold text-white">CECIs public git right here : </h1>

                    <Link
                        href="https://github.com/ceci05"
                        className='text-[#F7AB0A]'
                    >
                        Github Link
                    </Link>
                </div>
            </div>
            <>{props.renderDefault(props)}</>
        </div>
    )
}

export default StudioNavbar;