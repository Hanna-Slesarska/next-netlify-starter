
import { Inter } from "next/font/google";
import '../styles/globals.css'
import Header from "../components/Header"
import Footer from "../components/Footer"
const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }) {
  return (
    <html >
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}