import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from './components/footer';
import styles from "@/app/styles/home.module.css";

const poppins = Poppins({ subsets: ["latin"], weight: ['400', '700'] });

export const metadata = {
  title: "Inicio",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={(poppins.className, styles.body)} >
      {children}
      <Footer /> 
      </body>
    </html>
  );
}
