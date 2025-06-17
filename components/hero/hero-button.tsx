import { Button } from "../ui/button";
import Link from "next/link";

type ContactButtonProps = {
    type?: "default" | "Services";
};

const HeroButton = ({ type = "default" }: ContactButtonProps) => {
    const isServices = type === "Services";

    return (
        <div className="w-full flex justify-center mb-3">
          <Link
            href={isServices ? "#servicos" : "#sobre-nos"}
            className={`w-3/4 rounded-full font-bold ${
              isServices ? "bg-[#e41c28] text-white" : ""
            }`}
          >
            <Button
              className={`w-full rounded-full font-bold ${
                isServices ? "bg-[#e41c28] text-white hover:bg-[#c02d2d]" : "text-black bg-white hover:text-white"
              }`}
            >
              <h3 className="flex gap-1 items-center px-8 uppercase">
                {isServices ? "Nossos Serviços" : "Venha Conhecer"}
              </h3>
            </Button>
          </Link>
        </div>
      );
}
  

export default HeroButton;