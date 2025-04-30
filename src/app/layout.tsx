import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Cabecalho from "./Components/cabecalho";
import botaoWhatsapp from "./Components/botaoWhatsapp"
import BotaoWhatsapp from "./Components/botaoWhatsapp";
import Footer from "./Components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Móveis Gondor",
  description: "Uma marcenaria fora da caixa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} >
        
        <Cabecalho/>
        
        {children}
        
      </body>
      <Footer/>
    </html>
  );
}
