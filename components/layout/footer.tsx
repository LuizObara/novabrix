import LogoMarca from "../logo-marca";
import NavigationFooter from "./navigation-footer";
import ContactInfo from "./contact-info";
import Copyright from "./copyright";

export default function Footer() {
    return (
        <footer className="w-full bg-[#0c283b] lg:flex items-center justify-center py-[50px]">  
            <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-3 gap-5">
                <div className="flex justify-center items-center p-3 lg:p-0">
                    <LogoMarca type="dark"/>
                </div>

                <div className="flex justify-center items-center">
                    <NavigationFooter/>
                </div>

                <div className="flex justify-center items-center p-3 lg:p-0">
                    <ContactInfo/>
                </div>

                <div className="lg:col-span-3">
                    <Copyright/>
                </div>
            </div>
        </footer>
    );
}