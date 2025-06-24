import construcao from '@/assets/images/services/construcao-pontes.jpg';
import drenagem from '@/assets/images/services/drenagem-grande-porte.jpeg';
import muro from '@/assets/images/services/muro-de-gabiao.jpeg';
import passagem from '@/assets/images/services/passagem-molhada.jpeg';
import pavimentacao from '@/assets/images/services/pavimentacao-asfaltica.jpeg';
import recapeamento from '@/assets/images/services/recapiamento-pavimento-industrial.jpeg';
import recuperacao from '@/assets/images/services/recuperacao-pavimento-pesado.jpeg';
import reforma from '@/assets/images/services/reforma-pontes.jpeg';
import sistemas from '@/assets/images/services/sistemas-drenagem.jpeg';           

import Image from 'next/image';

const servicesData = [
    { title: 'Construção de Obras de Arte', image: construcao },
    { title: 'Drenagem de grande porte', image: drenagem },
    { title: 'Muro de Gabiao', image: muro },
    { title: 'Passagem molhada', image: passagem },
    { title: 'Pavimentação Asfáltica', image: pavimentacao },
    { title: 'Recapeamento de pavimento Industrial', image: recapeamento },
    { title: 'Recuperação de pavimento Pesado', image: recuperacao },
    { title: 'Reforma de Obra de Artes', image: reforma },
    { title: 'Sistemas de Drenagem', image: sistemas },
];

export default function Services() {
    return (
        <div className="p-3">
            <div className="text-[#0d2d44] select-none text-3xl"><h2>.</h2></div>
            <div className="my-10 w-full text-center uppercase text-3xl text-white font-bold">
                <h3 className="my-5">Nossos serviços</h3>
            </div>
            <div className="flex justify-center mb-5">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-7xl p-2 md:p-4 rounded-3xl text-white bg-[#09273D]">
                    {servicesData.map((service, index) => (
                        <div key={index} className="flex flex-col items-center bg-[#0D2D44] rounded-3xl p-4 transition-transform duration-500 md:hover:scale-105">
                            <Image src={service.image} alt={service.title} className="rounded-2xl mb-4 w-full h-40 object-cover" />
                            <h3 className="text-xl font-semibold uppercase text-center">{service.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}