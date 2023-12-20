import Image from "next/image";


interface Props {
  width?: number;
  height?: number;
  className?: string
}
export default function LogoWeb( {width = 80, height = 40, className}: Props) {
  return(
    <Image src={'/logo.png'} width={width} height={height} alt="Logo web" className={className} />
  )
}