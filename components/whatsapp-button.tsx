import Image from "next/image";
import WhatsAppIcon from "@/assets/whatsapp.png"

const WhatsappButton = () => {
  const whatsappNumber = '5511941864769'; 
  const whatsappMessage = encodeURIComponent('Olá! Gostaria de mais informações.');

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button relative"
    >
      <Image
        src={WhatsAppIcon}
        alt="WhatsApp"
        priority
        sizes="(min-width: 100%)"
        style={{ objectFit: 'contain' }}
      />
    </a>
  );
};

export default WhatsappButton;