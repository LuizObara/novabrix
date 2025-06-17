import Link from 'next/link';

const NavigationFooter = () => {
  return (
    <ul className="text-white text-center font-semibold">
      <li className='mb-2'>
        <Link href="/#inicio">Início</Link>
      </li>
      <li className='mb-2'>
        <Link href="/#servicos">Serviços</Link>
      </li>
      <li className='mb-2'>
        <Link href="/#sobre-nos">Sobre Nós</Link>
      </li>
      <li className='mb-2'>
        <Link href="/#contato">Contato</Link>
      </li>
    </ul>
  );
};

export default NavigationFooter;