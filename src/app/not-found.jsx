import Link from "next/link";
import styles from "./notFound.module.css";

export default function NotFound() {
    return (
        <div className={styles.container}>
            <img 
                src="/images/404.png" 
                width={400} 
                height={300} 
                className={styles.image} 
                alt="Ilustração de erro 404 - página não encontrada" 
            />

            <div className={styles.text}>
                <h1>404 - PÁGINA NÃO ENCONTRADA</h1>
                <p>
                    Oops! A página que você está procurando não existe ou foi movida. 
                    Que tal voltar para a página inicial e explorar nosso conteúdo?
                </p>
            </div>

            <div className={styles.link}>
                <Link href="/" aria-label="Retornar à página inicial">
                    Voltar para a página inicial
                </Link>
            </div>
        </div>
    )
}