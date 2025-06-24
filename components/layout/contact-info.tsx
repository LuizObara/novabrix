import { Linkedin } from 'lucide-react';
import { Facebook } from 'lucide-react';
import { Inbox } from 'lucide-react';

export default function ContactInfo () {
    return (
        <div className='grid grid-cols-1 gap-5'>
            <div className="flex justify-left text-white items-center">
                <h4 className='mr-3 text-lg font-semibold'>Redes Sociais:</h4>
                <Linkedin className='mx-2'/>
                <Facebook className='mx-2'/>
                <Inbox className='mx-2'/>
            </div>

            <div className="flex justify-left text-white items-center">
                <h4 className='mr-3 text-lg font-semibold'>Endereço:</h4>

                <div className="w-full uppercase">
                    <h5>Travessa Moacir Tudela Fernandes, nº 297, Ipanema do Meio , em Sorocaba/SP, CEP 18052-476</h5>
                </div>
            </div>
            
            <div className="flex justify-left text-white items-center">
                <h4 className='mr-3 text-lg font-semibold'>Contato:</h4>
                <h5>(015) 99731-3102</h5>
            </div>
        </div>
    )
}