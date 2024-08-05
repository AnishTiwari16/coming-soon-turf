'use client';

import React from 'react';
import Link from 'next/link';
import { SOCIAL_LINKS } from '@/config';

const Socials = () => {
    return (
        <div className=" flex gap-5 mt-5 md:mt-0">
            {SOCIAL_LINKS.slice(0, 3).map((elem, index) => {
                return (
                    <Link
                        href="#"
                        onClick={() => window.open(elem.link, '_blank')}
                        key={index}
                        className="text-theme_color"
                        aria-label="Social links"
                    >
                        {elem.icon}
                    </Link>
                );
            })}
        </div>
    );
};

export default Socials;
