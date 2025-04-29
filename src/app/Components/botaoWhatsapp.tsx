import Link from "next/link";
import styles from "../style/botao.module.css"



export default function botaoWhatsapp () {
    return (
        <a href="">
            <img className={styles.Whatsapp} src="/img/redes sociais.png" alt="Ícone Whatsapp" />
        </a> 
    );
  }

