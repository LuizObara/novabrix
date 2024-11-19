'use client'

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

import Image from "next/image";
import Link from "next/link";

import logoLight from '@/assets/NOVABRIX - Logotipo-light.png';
import logoDark from '@/assets/NOVABRIX - Logotipo-dark.png';

export default function Header() {
    const [mounted, setMounted] = useState(false);
    const { theme } = useTheme();

    useEffect(() => {
        setMounted(true); 
    }, []);

    if (!mounted) {
        return null; 
    }

    const isDarkMode = theme === "dark";

    return (
        <header className="w-full sticky z-40 bg-background top-0 flex justify-center border-b border-b-foreground/10 ">
            <nav className="w-full max-w-7xl flex justify-between items-center p-3 px-5 text-sm">
                <div className="flex gap-5 items-center font-semibold">
                    <Link href="/" className='relative w-48'>
                        <Image 
                            src={isDarkMode ? logoDark : logoLight}                  
                            alt="Logo Brixton"
                            priority
                            sizes="(min-width: 100%)"
                            style={{ objectFit: 'contain' }} 
                            className='sm:hidden xl:block'
                        />
                    </Link>
                </div>
            </nav>
        </header>
    );
}