'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from 'lucide-react';
import LogoMarca from "./logo-marca";

export default function OffcanvasButton() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline"><Menu /></Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <LogoMarca/>
                </SheetHeader>
                <div className="grid gap-4 py-4">
                    <ul className="space-y-2 text-lg flex flex-col ">
                        <li>
                            <SheetClose asChild>
                                <Link href="#inicio">
                                    <Button className="w-full mb-3 rounded" variant={"outline"}>
                                        <p className="hover:underline">Início</p>                                
                                    </Button>
                                </Link>
                            </SheetClose>
                        </li>
                        <li>
                            <SheetClose asChild>
                                <Link href="#sobre-nos">
                                    <Button className="w-full mb-3 rounded" variant={"outline"}>
                                        <p className="hover:underline">Sobre nós</p>   
                                    </Button>
                                </Link>                             
                            </SheetClose>
                        </li>
                        <li>
                            <SheetClose asChild>
                                <Link href="#servicos">
                                    <Button className="w-full mb-3 rounded" variant={"outline"}>
                                        <p className="hover:underline">Serviços</p> 
                                    </Button>
                                </Link>
                            </SheetClose>
                        </li>
                        <li>
                            <SheetClose asChild>
                                <Link href="#contato">
                                    <Button className="w-full mb-3 rounded" variant={"outline"}>
                                        <p className="hover:underline">Contato</p>     
                                    </Button>                           
                                </Link>
                            </SheetClose>
                        </li>
                    </ul>
                </div>
            </SheetContent>
        </Sheet>
    );
}