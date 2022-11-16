import Image from "next/image"

export default function Header() {
  return (
    <div className="p-2 text-center flex justify-center items-center bg-slate-900">
        <Image src="/static/images/logo/logo.png" 
                width={16} 
                height={16} alt='sss' />
        <h1 className="p-2 font-bold text-xl">Aldo D'Arrigo</h1>
    </div>
  )
}
