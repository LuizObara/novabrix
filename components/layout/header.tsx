import OffcanvasButton from "../offcanvas-button";
import ContactButton from "../contact-button";
import NavigationBar from "./navigation-bar";
import Logo from "./logo";

export default function Header() {

    return (
        <header className="w-full sticky z-40 bg-background top-0 flex justify-center border-b border-b-foreground/10 ">
            <nav className="w-full max-w-7xl flex items-center p-3 px-5 text-sm">
                <div className="flex gap-5 items-center justify-between font-semibold w-full">
                    <div className="flex gap-5 items-center font-semibold">
                        <Logo />
                    </div>
                    <div className="gap-5 items-center font-semibold hidden lg:flex">
                        <NavigationBar />
                    </div>
                    <div className="gap-5 items-center font-semibold hidden lg:flex">
                        <ContactButton type="whatsapp" />
                    </div>
                    <div className="block lg:hidden">
                        <OffcanvasButton />
                    </div>
                </div>
            </nav>
        </header>
    );
}