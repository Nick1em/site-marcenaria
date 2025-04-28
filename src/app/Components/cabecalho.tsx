import Link from "next/link";
import styles from "../style/nav.module.css"
import Image from "next/image";
import { link } from "fs";

export default function Cabecalho (){
   return (
    <header className={styles.header}>
      <div className= {styles.cabecalho}>
        <div>
          <img className={styles.logo}  src="/img/arvore branca sf.png" alt="Logo Móveis Gondor" />
        </div>
        <nav className={styles.nav}>
          <Link href="/">Home</Link> | {''}
          <Link href="/Produtos">Produtos</Link> | {''}
          <Link href="/Calculadora">Calculadora</Link> 
        </nav>
      </div>
    </header>
   )
}