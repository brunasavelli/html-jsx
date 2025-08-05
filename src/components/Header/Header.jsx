import Image from 'next/image';
import styles from './Header.module.css';

export default function Header({ titulo, descricao, totalProdutos }) {
    return (
        <div className={styles.header}>
            <h1>{titulo}</h1>
            <p>{descricao}</p>
            <p>{totalProdutos} <span id="totalProducts">0</span></p>
        </div>
    )
}