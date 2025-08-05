import Image from 'next/image';
import styles from './ProductCard.module.css';

export default function ProductCard({ title, price, description, image, rating }) {
    return (
        <div className={styles.productCard}>
            <Image
                src={image}
                width={500}
                height={500}
                alt="Picture of the author"
            />
            <h2>{title}</h2>
            <h3>{price}</h3>
            <p>{description}</p>
            <div className="racing">
                <span className="rating">⭐⭐⭐⭐⭐</span>
                <span>(4.8) - 1.234 avaliações</span>
            </div>
        </div>
    );
}