import Link from "next/link";
import styles from "../style/botao.module.css"



export default function botaoWhatsapp () {
    return (
        <a className="fixed bottom-6 left-6 z-50"
        href="https://wa.me/5541998133328"
        target="_blank"
        rel="noopener noreferrer"
        >
            <img className={styles.Whatsapp} src="/img/zap.png" alt="Whatsapp" />
        </a> 
    );
  }

