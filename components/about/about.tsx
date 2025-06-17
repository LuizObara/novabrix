import NavigationButtons from "../navigation-buttons";
import AboutButtons from "./about-buttons";
import about from "@/assets/images/WhatsApp Image 2025-02-20 at 15.31.51.jpeg";
import Image from "next/image";

export default function About() {
    return (
        <div className="p-3">
            <div className="text-white select-none text-3xl"><h2>.</h2></div> {/* TODO how do i improve this? */}
            <div className="my-10 w-full text-center uppercase text-3xl font-bold">
                <h2 className="my-5">Sobre a Novabrix</h2>
            </div>
            <div className="flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl">
                    <div className="relative mb-3">
                        <Image
                            src={about}
                            alt="Quem somos"
                            priority
                            sizes="(min-width: 100%)"
                            style={{ objectFit: 'contain' }}
                            className="rounded-2xl"
                        />
                    </div>
                    <div className="w-full md:w-5/6 mx-auto font-medium text-justify flex flex-col min-h-full">
                        <p className="mb-3 text-sm">
                            Uma empresa do grupo Brixton, a NOVABRIX surgiu com a missão de transformar desafios
                            em oportunidades, oferecendo soluções de engenharia inovadoras e de alta qualidade
                            focadas em pavimentação pesada, infraestrutura e obras de arte. Com sede em Sorocaba,
                            SP, a NOVABRIX se dedica a entregar projetos que não apenas atendem, mas superam as
                            expectativas dos clientes, construindo um legado de confiança e excelência.
                        </p>
                        <h4 className="font-semibold text-center text-md uppercase mb-2">Nossos Diferenciais</h4>
                        <p className="mb-1 text-sm">
                            Trabalhamos em estreita parceria com nossos clientes, fornecedores e colaboradores para
                            criar soluções personalizadas que atendam às necessidades específicas de cada projeto.
                        </p>
                        <p className="mb-3 text-sm">
                            A confiança que depositam em nós é retribuída com dedicação e comprometimento. Cada
                            projeto é abordado com o mesmo entusiasmo e rigor técnico, independentemente do
                            tamanho ou complexidade. Na NOVABRIX, cada desafio é uma oportunidade de demonstrar
                            nossa paixão pela engenharia e nossa capacidade de inovação.
                        </p>
                        <div className="mt-auto mb-5 hidden md:block">
                            <h5 className="uppercase text-center w-full mb-3 text-lg font-semibold">Conheça nossas empresas do grupo</h5>
                            <NavigationButtons />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center mt-3">
                <div className="w-full max-w-7xl">
                    <div className="my-5 md:hidden">
                        <h5 className="uppercase text-center w-full mb-3 text-lg font-semibold">Conheça nossas empresas do grupo</h5>
                        <NavigationButtons />
                    </div>
                    <AboutButtons />
                </div>
            </div>

        </div>
    );
}