import NavigationButtons from "../navigation-buttons";
import EmailCopy from '@/components/email-copy';

export default function Contact() { 
    return (
        <div className="p-3 ">
            <div className="text-[#0d2d44] select-none text-3xl"><h2>.</h2></div> 
            <div className="my-10 w-full text-center text-white uppercase text-3xl font-bold">
                <h2 className="my-5">Quem nós somos</h2>
            </div>
            <div className="flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-7xl">
                    <div className="p-3 rounded-lg bg-[#08263A] min-h-[430px] flex flex-col">
                        <div className="my-5 md:my-3 w-full text-center text-white uppercase text-xl font-bold">nossa localização</div>
                        <div className="p-3 w-full h-[300px] md:w-[500px] md:h-[500px] bg-black rounded-lg">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.7983357564067!2d-47.472375712972834!3d-23.53975460616013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c58a69f35ab025%3A0xd371808415e45638!2sR.%20Ant%C3%B4nio%20Perez%20Hernandez%2C%20125%20-%20Parque%20Campolim%2C%20Sorocaba%20-%20SP%2C%2018048-115!5e0!3m2!1spt-BR!2sbr!4v1739451357402!5m2!1spt-BR!2sbr"                         
                                className="w-full h-full rounded-lg"
                                allowFullScreen={true}
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>
                    </div>

                    <div className="p-3 rounded-lg bg-[#08263A]">
                        <div className="my-3 w-full text-center text-white uppercase text-xl font-bold">fale conosco!</div>
                        <div className="md:w-[500px] md:h-[500px] flex flex-col">
                            <p className="text-white p-3 text-md font-semibold uppercase text-center">
                                A parceria é um bom caminho
                            </p>
                            <div className="my-auto ">
                                <h4 className='text-white text-center uppercase my-5'>Conheça também:</h4>
                                <NavigationButtons/> 
                            </div>
                            <div className="mt-auto ">
                                <EmailCopy/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}