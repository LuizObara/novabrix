import HeroButton from "./hero-button"

export default function Hero() { 
    return (
        <div className="min-h-screen bg-hero flex items-center justify-center relative">
            <div className="text-white px-5 md:px-10 text-center lg:text-left max-w-7xl">
                <h1 className="uppercase text-center text-3xl md:text-5xl font-bold mb-4">
                    Construindo Novos Caminhos
                </h1>
                <h2 className="text-xl uppercase md:text-2xl text-center font-medium mb-6">
                    Soluções de engenharia inovadoras & alta qualidade
                </h2>

                <div className="lg:flex justify-around gap-4 mb-10">
                    <HeroButton/>
                    <HeroButton type="Services"/>
                </div>
            </div>
        </div>
    )
}