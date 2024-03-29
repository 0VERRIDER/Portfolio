"use client";

import { useContext } from 'react';
import { BottomMessageBarContext } from '../../../context/bottomMessageBar/BottomMessageBarContext';
import Image from 'next/image'
import { redirectTo } from '@/app/utils/Utils';

const socials = [
    {
        name: 'Github',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
        href: 'https://github.com/0verrider'
    },
    {
        name: 'Linkedin',
        icon: 'https://www.svgrepo.com/show/922/linkedin.svg',
        href: 'https://www.linkedin.com/in/anshilp/'
    },
    {
        name: 'Instagram',
        icon: 'https://www.svgrepo.com/show/83715/instagram-logo.svg',
        href: 'https://www.instagram.com/anshil.me/'
    }
]

export default function SocialButtons() {
    const { showBottomMessageBar } = useContext(BottomMessageBarContext);

    return (
        <div className="flex flex-row justify-center items-center gap-6">
            {socials.map((social, index) => {
                return (
                    <div key={index} className=" p-2 invert">
                        <a onClick={
                            () => {
                                showBottomMessageBar(`Redirecting to ${social.name}`)
                                redirectTo(social.href)
                            }
                            }>
                            <Image src={social.icon} alt={social.name} width={30} height={30} className='rounded-sm w-7 h-7 hover:opacity-70' />
                        </a>
                    </div>
                )
            })}
        </div>
    )
}