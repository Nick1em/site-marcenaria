import Link from "next/link";
import Document from "next/document";
import styles from "../style/footer.module.css";


export default function footer() {
    return (
        <footer className={styles.rodape}>
            <div className={styles.logo}>
                <img src="/img/mgSemFundo.png"
                    alt="Árvore Branca Logo da Móveis Gondor">
                </img>
            </div>
            <div className={styles.infosRodape}>
                <div>
                    <nav className={styles.nav}>
                        <Link href="/">Home</Link> <br />
                        <Link href="/Produtos">Produtos</Link> <br />
                        <Link href="/Calculadora">Seu orçamento na hora!</Link>
                    </nav>
                </div>

                <div className="text-center">
                    <span > Contato</span> <br />
                    <span  > (41) 9 9813-3328</span> <br />
                    <span > E-mail: moveisgondor@gmail.com</span> <br />
                    <span > Almirante Tamandaré - Paraná</span>
                </div>

                <div className=" flex flex-col colunm items-end">
                    <a href="https://www.instagram.com/moveisgondor/">
                        <img className={styles.redesSociais} src="/img/instaSemFundo.png" /> <br />
                    </a>
                    <a href="https://wa.me/41998133328">
                        <img className={styles.redesSociais} src="/img/zapSemFundo.png" /> <br />
                    </a>
                    <a href="https://www.tiktok.com/@por_nicolekananda">
                        <img className={styles.redesSociais} src="/img/tkSemFundo.png" />
                    </a>

                </div>
            </div>

            <div className={styles.direitos}>
                <hr className="w-full h-px bg-gray-300 border-0" />
                <p> &copy; Móveis Gondor. Todos os direitos reservados</p>
            </div>
        </footer>
    );
}