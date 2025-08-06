import Link from "next/link";
import styles from "./notFound.module.css";

export default function NotFound() {
    return (
        <div className={styles.container}>
            {/* <img src="/img/loading.gif" width={200} height={200} className={styles.image} alt="Loading animation" /> */}

            <div className={styles.text}>
                <h1>404 - PÁGINA NÃO ENCONTRADA :(</h1>
                <p>A página que você procura não existe.</p>
            </div>

            <div className={styles.link}>
                <Link href="/">Voltar para a página inicial</Link>
            </div>
        </div>
    )
}