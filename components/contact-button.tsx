import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import Link from "next/link";

type ContactButtonProps = {
  type?: "default" | "whatsapp";
};

const ContactButton = ({ type = "default" }: ContactButtonProps) => {
  const isWhatsapp = type === "whatsapp";

  return (
    <div className="w-full flex justify-center">
      <Link
        href={isWhatsapp ? "https://wa.me/15981537823" : "mailto:contato@britongroup.com.br"}
        className={`w-3/4 rounded-full font-bold ${
          isWhatsapp ? "bg-[#0c776c] text-white" : ""
        }`}
        target="blank"
      >
        <Button
          className={`w-full rounded-full font-bold ${
            isWhatsapp ? "bg-[#e41c28] text-white hover:bg-[#c02d2d]" : ""
          }`}
        >
          <h3 className="flex gap-1 items-center px-8">
            {"Fale conosco"} <Send />
          </h3>
        </Button>
      </Link>
    </div>
  );
};

export default ContactButton;