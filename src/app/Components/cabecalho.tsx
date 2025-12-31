import Link from "next/link";
import styles from "../style/nav.module.css"
import Image from "next/image";
import { link } from "fs";

export default function Cabecalho (){
   return (
    <div className={styles.header}>
      <div className= {styles.cabecalho}>
        <a href="/">
          <img className={styles.logo}  src="/img/arvore branca sf.png" alt="Logo Móveis Gondor" />
        </a>
        <nav className={styles.nav}>
          <Link  href="/">Home</Link>  {''}
          <Link  href="/Produtos">Produtos</Link>   {''}
          <Link  href="/Calculadora">Orçamento Inteligente!</Link> 
        </nav>
      </div>
    </div>
   )
}