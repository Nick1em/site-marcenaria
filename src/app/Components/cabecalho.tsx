import Link from "next/link";

export default function Cabecalho (){
   return (
    <header>
      <nav>
        <Link href="/">Home</Link> | {''}
        <Link href="/Produtos">Produtos</Link> | {''}
        <Link href="/Calculadora">Calculadora</Link> | {''}
      </nav>
    </header>
   )
}