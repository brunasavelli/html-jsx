import Image from 'next/image';
import styles from './Header.module.css';

export default function Header({ titulo, descricao, totalProdutos }) {
    return (
        <div className={styles.header}>
            <Image src="/images/logo.png" alt="Logo" width={100} height={100} priority={true} />
            <div className={styles.text}>
                <h1 className="font-cormorant-garamond">{titulo}</h1>
                <p className="font-cormorant-garamond">{descricao}</p>
                <p className="font-cormorant-garamond">{totalProdutos}</p>
            </div>
        </div>
    )
}