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
                    <h5>Rua Antonio Perez Hernandez, nº 125, box 50, em Sorocaba/SP, CEP 18048-115</h5>
                </div>
            </div>
            
            <div className="flex justify-left text-white items-center">
                <h4 className='mr-3 text-lg font-semibold'>Contato:</h4>
                <h5>(011) 94186-4769</h5>
            </div>
        </div>
    )
}