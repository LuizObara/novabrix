'use client'

import Image from "next/image";
import Link from "next/link";

import logoLight from '@/assets/NOVABRIX - Logotipo-light.png';
import logoDark from '@/assets/NOVABRIX - Logotipo-dark.png';

import logoMarca from '@/assets/NOVABRIX - Logomarca-light.png';

type LogoProps = {
    type?: "default" | "dark";
}

export default function Logo({ type = "default" }: LogoProps) {
    
    const isDarkMode = type === "dark";

    return (
        <Link href="/#inicio" className='relative w-40'>
            <Image
                src={isDarkMode ? logoDark : logoLight}
                alt="Logo Brixton"
                priority
                sizes="(min-width: 100%)"
                style={{ objectFit: 'contain' }}
                className='hidden lg:block'
            />
            <Image
                src={logoMarca}
                alt="Logo Brixton"
                priority
                sizes="(min-width: 100%)"
                style={{ objectFit: 'contain' }}
                className='block lg:hidden'
            />
        </Link>  
    );
}