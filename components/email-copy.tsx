'use client'

import { Button } from "@/components/ui/button";
import { toast } from 'sonner';

export default function EmailCopy() {

    return (
        <div className="flex items-center gap-2 p-3">            
            <input 
                type="text" 
                value="contato@novabrix.com.br" 
                readOnly 
                disabled
                className="p-2 w-full rounded-lg border bg-none border-gray-800 text-white"
                id="emailInput"
            />
            <Button 
                onClick={() => {
                    navigator.clipboard.writeText("contato@brixtongroup.com.br")
                    toast("✔ E-mail copiado para Área de Transferência")
                }}
                className="bg-gray-950 py-5 text-white rounded-lg hover:bg-gray-800"
            >
                Copiar E-mail
            </Button>
        </div>
    );
}