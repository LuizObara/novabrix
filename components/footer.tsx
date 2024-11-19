'use client'

import { ThemeSwitcher } from "@/components/theme-switcher";

export default function Footer() {
    return (
        <footer className="w-full lg:flex items-center justify-end border-t py-2 px-[100px] left-0 bg-background hidden lg:block">  
            <ThemeSwitcher />
        </footer>
    );
}