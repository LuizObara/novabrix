import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import Link from "next/link";

const ContactButton = () => (
  <div className="w-full flex justify-center mt-5 mb-5">
    <Link href='mailto:contato@britongroup.com.br' className="w-3/4 rounded-full font-bold">
      <Button className="w-full rounded-full font-bold">
        <h3 className="flex gap-1 items-center">
          Fale conosco <Send />
        </h3>
      </Button>
    </Link>
  </div>
);

export default ContactButton;