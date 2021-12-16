import Image from 'next/image';
import LogoPng from '@/public/logo-big.png';

const SvgLogoText = () => {
  return (
    <>
      <Image src={LogoPng} alt="logo" width={300} height={300} />
    </>
  );
};

export default SvgLogoText;
