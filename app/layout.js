
import { Inter } from "next/font/google";
import '../styles/globals.css'
import Image from "next/image";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }) {
  const header = (
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
  );

  const footer = (
    <footer>
      <div className="border-t border-slate-400 mt-12 py-6 text-center text-slate-400">
        <h3>Designed by Hanna</h3>
      </div>
    </footer>
  );
  return (
    <html >
      <body>
        {header}
        {children}
        {footer}
      </body>
    </html>
  );
}