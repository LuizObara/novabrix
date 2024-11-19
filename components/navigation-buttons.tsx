import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import logoBrixton from '@/assets/Brixton Logomarca-01 dark.png'

const NavigationButtons = () => {
  return (
    <div className="flex w-full justify-evenly items-center gap-4">
      <Link href="https://vhcs.com.br" target="_blank">
        <Button className="w-40 rounded-full font-bold">
          <h4 className="text-sm">VHCS</h4>
        </Button>
      </Link>

      <Link href="https://brixton.com.br" target="_blank">
        <Button className="w-40 rounded-full bg-sky-950 hover:bg-red-700 font-bold">
          <Image
            src={logoBrixton}
            alt="Logotipo Novabrix"
            priority
            sizes="(min-width: 100%)"
            style={{ objectFit: 'contain' }}
            className="w-2/3"
          />
        </Button>
      </Link>
    </div>
  );
};

export default NavigationButtons;