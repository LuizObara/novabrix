'use client';

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import logoLight from '@/assets/NOVABRIX - Logomarca-light.png';
import logoDark from '@/assets/NOVABRIX - Logomarca-dark.png';

const LogoMarca = () => {
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
    <div className="w-full flex justify-center">
      <Image
        src={isDarkMode ? logoDark : logoLight}
        alt="Logomarca Novabrix"        
        sizes="(min-width: 100%)"
        style={{ objectFit: 'contain' }}
        className="w-2/3 lg:w-full"
      />
    </div>
  );
};

export default LogoMarca;