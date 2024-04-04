import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <>
       <header>
      <div className="text-center bg-slate-800 p-8 my-6 rounded-md">
        <Image
          src="/logo1.png"
          width={70}
          height={70}
          className="mx-auto"
          alt={"logo"}
        />
        <Link href="/">
          <h1 className="text-2xl text-white font-bold mt-4">I Am Cat</h1>
        </Link>
        <p className="text-slate-300">🤟 Welcome to my cat blog. </p>
      </div>
    </header>
    </>
  )
}
