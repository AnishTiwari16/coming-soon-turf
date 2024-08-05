'use client';

import { motion } from 'framer-motion';
import React from 'react';
import { AuroraBackground } from './Aura-bg/auraComponent';
import CountDown from '../countDown';
import Link from 'next/link';
import { TurfLogoIcon } from '@/config';
import Socials from './socials';

export function AuroraBackgroundDemo() {
    const specificEndDate = new Date('2024-08-31T23:59:59');
    return (
        <AuroraBackground>
            <div className="relative z-10 w-full  items-center justify-between font-mono text-sm flex">
                <Link
                    href="/"
                    className="logo-container flex items-center align-middle"
                >
                    <TurfLogoIcon />
                    <div className="audio-wide text-[22px] text-theme_color">
                        TURF
                    </div>
                </Link>
                <Socials />
            </div>
            <motion.div
                initial={{ opacity: 0.0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: 'easeInOut',
                }}
                className="relative flex flex-col gap-4 items-center justify-center px-4 pt-32"
            >
                <CountDown endDate={specificEndDate} />
            </motion.div>
        </AuroraBackground>
    );
}
